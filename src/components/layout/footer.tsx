import { FC } from 'react'
import { Github } from '../ui/Icons'
import Link from 'next/link'


const footer: FC = ({}) => {
  return <footer className="h-40 w-full border-t">
  <div className="container m-auto h-full p-4">
    <div className="flex flex-col h-full justify-end items-center">
      <div className='flex w-full justify-center'>
      <span className="flex gap-2 text-md items-center">
        Made by Ravi{" "}
        <Link className="w-4 h-4 text-foreground" href="https://github.com/Ravipandey24" rel="noopener noreferrer" target="_blank">
          <Github></Github>
        </Link>
      </span>
      </div>
     
    </div>
  </div>
</footer>
}

export default footer