import "../../style/contact.css"
import "../../style/contactRes.css"
import SocialLinks from "./SocialLinks"

const Contact:React.FC = () => {
    return (
<>
<div className="h-[800px] bg-primary">
<div className="contactCon">
<h2 className="contactTitle">Contact</h2>
<div className="flex justify-between items-center flex-col h-[500px] ">
<h3 className="text-5xl mt-20" >Send me an email at: <br/><span className="underline">mrdarrellroberts@gmail.com </span></h3>
<div className="flex-col ">
<h3 className="text-5xl">Or contact me on LinkedIn or GitHub below</h3>
<SocialLinks />
</div>
</div>
</div>
</div>
</>
    )
}
export default Contact