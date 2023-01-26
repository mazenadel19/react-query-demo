import { createPost } from "@/services/PostServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate()
  const titleText = useRef<HTMLInputElement>(null)
  const bodyText = useRef<HTMLInputElement>(null)
  const userIdText = useRef<HTMLInputElement>(null)

  const queryClient = useQueryClient()
  const { status, error, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueriesData(['PostDetails', newPost!.id], newPost)
      navigate(`/react-query/${newPost?.id}`)
    }
  })


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({
      title: titleText.current!.value,
      body: bodyText.current!.value,
      userId: +userIdText.current!.value
    })
  }

  /**
   * async () => {
        const title = titleText.current!.value,
          body = bodyText.current!.value
          return await queryClient.createPost({ title, body })
      }
   */


  return <>
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl text-center mb-8">create post</h1>
      <div className='grid gap-6 mb-6 md:grid-cols-2'>
        <div>
          <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900'>tilte</label>
          <input id='title' type='text' required ref={titleText}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label htmlFor='body' className='block mb-2 text-sm font-medium text-gray-900'>body</label>
          <input id='body' type='text' required ref={bodyText}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label htmlFor='userId' className='block mb-2 text-sm font-medium text-gray-900'>userId</label>
          <input id='userId' type='number' min={1} max={10} required ref={userIdText} 
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
      </div>
      <button type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit
      </button>
    </form>
  </>;
};

export default Create;