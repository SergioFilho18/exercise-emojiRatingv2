import { EmojiRating } from "./components/EmojiRating";

const Page = () => {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <EmojiRating rate={3} />
        </div>
    );
}

export default Page;