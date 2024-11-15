import Image from "next/image"
import Link from "next/link"
import style from './usercard.module.css'

const UserCard = () => {
    return (
        <>

            <div className={style.usercard}>

                <div className={style.cardHeader}></div>
                <Image src='/img/monster.png' width={50} height={50} alt="user" />
                <h3>Firoz Ansari</h3>
                <span>@khanfiroz4045</span>

                <div className={style.info}>
                    <div>
                        <h2>6623</h2>
                        <p>Following</p>
                    </div>

                    <div>
                        <h2>1523</h2>
                        <p>Followers</p>
                    </div>
                </div>


                <Link href='/'>Logout</Link>

            </div>

        </>
    )
}

export default UserCard