export const config = { amp: true }
import AmpImg from "../amp.d.ts"

export default function Home({ req, res, query}) {

    const date = new Date()

    return (
    <div className="container">
        home

        <p>Some time: {date.toJSON()}</p>

        <br/>
        <br/>
        <amp-timeago
            width="0"
            height="15"
            datetime={date.toJSON()}
            layout="responsive"
        >
            .
        </amp-timeago>

        <amp-facebook-comments
            width="486px"
            height="657px"
            layout="responsive"
            data-numposts="5"
            data-href="https://www.facebook.com/photo?fbid=1619238644911471&set=a.102437109924973"
        >
        </amp-facebook-comments>
    </div>
  )
}
