import React, {useRef, useState} from 'react';


const ImgUpload = () => {

    const myRef = useRef("")
    const [upload , setUpload] = useState("")
    console.log(myRef)

    const onSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('image' , upload);
        console.log(upload)
        setUpload(myRef.current.click())
    }

    return (
        <>

            <form onSubmit={onSubmit}>

                    <input ref={myRef} type="file" id="imgupload" style={{display:'none'}}/>
                    <button style={{border:"1px solid" ,borderRadius:"30px"}} id="OpenImgUpload" >
                        <img  src="/images/21104.png" style={{width:"40px" }} className="p-1" />
                    </button>
            </form>

        </>
    );
};

export default ImgUpload;


