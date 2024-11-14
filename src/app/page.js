import NewPost from "./components/NewPost/NewPost";
import PeopleCard from "./components/PeopleCard/PeopleCard";
import PostCard from "./components/PostCard/PostCard";
import UserCard from "./components/UserCard/UserCard";

export default function Home() {
  return (
      <>
        <div className="main-wrapper">

          <div>
            <UserCard />
          </div>

          <main>

            <NewPost />

            <PostCard />

          </main>

          <div>
              <div className="peopleDiv">
              <h2>People's You Might Know</h2>
              <PeopleCard />
              </div>
          </div>

        </div>
      </>
  );
}
