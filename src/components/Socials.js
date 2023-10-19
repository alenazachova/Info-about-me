import React from "react";
import logo from "../assets/me.jpg";

// props = {
// url: string
// Icon: Component
// }
const SocialButtons = (props) => {
    const { url, Icon } = props;
    return (
        <a href={url}>
            <Icon />
        </a>
    )
}

const FacebookIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path
                fill="#ffffff"
                d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z"
            />
        </svg>
    );
};

// FacebookIcon => FacebookIcon()
// FacebookIcon => <FacebookIcon />
function Socials() {
  return (
    <footer>
        <SocialButton url={"https://www.facebook.com/alca.k.zachova"} Icon={FacebookIcon} title={""} />
        <SocialButton url={"instagram.com/allinecka"} Icon={InstagramIcon} />

      {/*<a href="https://www.facebook.com/alca.k.zachova">*/}
      {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">*/}
      {/*    <path*/}
      {/*      fill="#ffffff"*/}
      {/*      d="M25 3C12.85 3 3 12.85 3 25c0 11.03 8.125 20.137 18.712 21.728V30.831h-5.443v-5.783h5.443V21.2c0-6.371 3.104-9.168 8.399-9.168 2.536 0 3.877.188 4.512.274v5.048h-3.612c-2.248 0-3.033 2.131-3.033 4.533v3.161h6.588l-.894 5.783h-5.694v15.944C38.716 45.318 47 36.137 47 25c0-12.15-9.85-22-22-22z"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</a>*/}
      {/*<a href="instagram.com/allinecka">*/}
      {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">*/}
      {/*    <path*/}
      {/*      fill="#ffffff"*/}
      {/*      d="M16 3C8.832 3 3 8.832 3 16v18c0 7.168 5.832 13 13 13h18c7.168 0 13-5.832 13-13V16c0-7.168-5.832-13-13-13H16zm0 2h18c6.086 0 11 4.914 11 11v18c0 6.086-4.914 11-11 11H16C9.914 45 5 40.086 5 34V16C5 9.914 9.914 5 16 5zm21 6a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12 3c-6.063 0-11 4.937-11 11s4.937 11 11 11 11-4.937 11-11-4.937-11-11-11zm0 2c4.982 0 9 4.018 9 9s-4.018 9-9 9-9-4.018-9-9 4.018-9 9-9z"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</a>*/}
      {/*<a href="https://github.com/alenazachova">*/}
      {/*  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">*/}
      {/*    <path*/}
      {/*      fill="#ffffff"*/}
      {/*      d="M17.791 46.836A1.999 1.999 0 0 0 19 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0 1 19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 0 1-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z"*/}
      {/*    />*/}
      {/*  </svg>*/}
      {/*</a>*/}
    </footer>
  );
}

export default Socials;

const entries = [];
<Table>
    {entries.map(entry => {
        <TableRow start={entry.start} end={entry.end} description={entry.description} />
    })}
</Table>


const TableRow = (props) => {
    const {start, end, description} = props;
    return (
        <div>
            <DateCell>
                <DateFormatted value={start} />
            </DateCell>
            <DateCell value={end} />
            <TextCell value={description} />
        </div>
    )
};
