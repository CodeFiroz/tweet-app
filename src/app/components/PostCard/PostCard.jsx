import Link from 'next/link'
import style from './postcard.module.css'
import Image from 'next/image'

const PostCard = () => {
  return (
    <>
        <div className={style.postcard}>
            <Link href='/'>
                <Image src='/img/user/3.jpg' width={50} height={50} />
            </Link>    
                <div className={style.postInfo}>
                    
                    <div className={style.postHead}>
                        <h4>Bruno Mars</h4>
                        <p>@mars.bruno12</p>
                    </div>
                    <span> <i className="bx bx-time"></i> 14 Minute Ago</span>

                    <h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium perferendis quo, id exercitationem nulla officia cum iusto fuga ducimus adipisci.
                    </h1>
                    
                </div>
        </div>    
    </>
  )
}

export default PostCard