const Logout = async(req,res)=>{
    try{
      //destroying the cookies
        //res.clearCookie('token',{path:'/'})
        console.log("banke")
        //success message
        return res.status(200).json({
            success:true,
            message:"logout success"
        }) ;
        // return
        
    }
    //for error handling
    catch (error) {
        console.log(error);
        return res.status(404).json({
          success: false,
          message: "Network Error",
        });
      }

}
module.exports = Logout