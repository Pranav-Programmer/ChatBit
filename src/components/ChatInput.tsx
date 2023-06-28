'use client'
import { Icon, Icons } from '@/components/Icons'
import axios from 'axios'
import { FC, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import TextareaAutosize from 'react-textarea-autosize'
import Button from './ui/Button'

interface ChatInputProps {
  chatPartner: User
  chatId: string
}

const ChatInput: FC<ChatInputProps> = ({ chatPartner, chatId }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')

  const sendMessage = async () => {
    if(!input) return
    setIsLoading(true)

    try {
      await axios.post('/api/message/send', { text: input, chatId })
      setInput('')
      textareaRef.current?.focus()
    } catch {
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='border-t border-gray-200 -px-15 pt-4 flex flex-row gap-1' style={{marginBottom:'-2rem'}}>
  <div className='relative flex items-end rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 flex-1'>
    <TextareaAutosize
      ref={textareaRef}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendMessage();
        }
      }}
      rows={1}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Message"
      className='flex-1 resize-none border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 py-1.5 text-md leading-6'
    />

    <div
      onClick={() => textareaRef.current?.focus()}
      className='absolute inset-0'
      aria-hidden='true'></div>
  </div>
  <div className='flex justify-end mt-2'>
    <div className='flex-shrink-0'>
      <Button className='bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200' style={{borderRadius:'50%'}} isLoading={isLoading} onClick={sendMessage} type='submit'>
        <Icons.Logo className='h-5 w-5 text-white-600 decoration-4' style={{padding:'-1rem'}}/>
      </Button>
    </div>
  </div>
</div>

  )
}

export default ChatInput
