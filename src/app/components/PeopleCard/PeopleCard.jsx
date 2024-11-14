import Link from 'next/link'
import Image from 'next/image'
import style from './peoplecard.module.css'

const PeopleCard = () => {
  return (
    <>
    
    <div className={style.peopleCard}>
        <div className={style.info}>
        <Link href='/'>
        <Image src='/img/user/2.jpg' width={50} height={50} alt="user" />
        </Link>
        <div>
            <h4><Link href='/'>John Doe</Link></h4>
            <p>@johndoe394</p>
        </div>
        </div>

        <Link href='/' className={style.follow}>
            Follow
        </Link>

    </div>

    </>
  )
}

export default PeopleCard