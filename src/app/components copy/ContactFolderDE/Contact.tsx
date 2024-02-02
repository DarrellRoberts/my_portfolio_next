import "../../style/contact.css"
import "../../style/contactRes.css"
import SocialLinks from "./SocialLinks"

const Contact:React.FC = () => {
    return (
<>
<div className="h-[800px] bg-primary">
<div className="contactCon">
<h2 className="contactTitle">Kontakt</h2>
<div className="flex justify-between items-center flex-col h-[500px] ">
<h3 className="text-5xl mt-20" >Schicke mir eine Email: <br/><span className="underline">mrdarrellroberts@gmail.com </span></h3>
<div className="flex-col ">
<h3 className="text-5xl">Oder erreiche mich auf LinkedIn oder GitHub</h3>
<SocialLinks />
</div>
</div>
</div>
</div>
</>
    )
}
export default Contact