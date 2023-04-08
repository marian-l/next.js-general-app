import Main from './Main';
import Picture from './Picture';
import Socials from './Socials';
import Email from './Email';

export default function BusinessCard() {
    return (
        <div>
            <Picture />
            <Main />
            <Email />
            <Socials />
        </div>
    )
}