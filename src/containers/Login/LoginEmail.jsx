import React, {useState} from 'react';
import img from '../../assets/undraw_remotely_2j6y.svg'
import './LoginCss.css'
function LoginEmail(props) {

    const [isExist = false, setExist] = useState()

    const handleNextStep = e =>{
        e.preventDefault();
        
        //Call API check email coi đăng kí chưa, xong setExist ở đây
        //Nếu đã đăng kí thì qua mục đăng nhập, k thì qua chỗ đăng kí

        if(isExist){
            document.getElementById('formGmail').classList.add('d-none')
            document.getElementById('formRegister').classList.add('d-none')
        }else{
            document.getElementById('formGmail').classList.add('d-none')
            document.getElementById('formPassword').classList.add('d-none')
        }
    }

    const handleLogin = e => {
        e.preventDefault();
    }

    const handleRegister = e => {
        e.preventDefault();
    }

    return (
        <div className="content warp-login">
            <div className="container overflow-hidden">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={img} alt="login pic" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 content d-flex">

                        {/* form nhập gmail */} {/* thích thì m gộp 3 cái này làm 1 component cũng được */}
                        <div id='formGmail' className="col-12 ">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3 className="text-left">Sign In</h3>
                                    <p className="text-left">Nhập gmail xong nó sẽ kiểm tra xem có tài khoản trong database chưa</p>
                                </div>
                                <form onSubmit={e => handleNextStep(e)}>
                                    <div className="form-group first">
                                        <label className="text-left" >Your Gmail:</label>
                                        <input type="text" placeholder="Gmail" className="form-control" id="gmail"></input>
                                    </div>
                                    <input type="submit" value="Next Step" style={{background: '#ffda79'}} className="btn btn-block"></input>
                                </form>
                            </div>
                        </div>

                        {/* form đăng nhập */}
                        <div id="formPassword" className=" col-12">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3 className="text-left">Sign In</h3>
                                    <p className="text-left">Nếu đã có tài khoản rồi sẽ qua cái này</p>
                                </div>
                                <form onSubmit={e => handleLogin(e)}>
                                    <div className="form-group first">
                                        <label className="text-left">Your Password:</label>
                                        <input type="text" placeholder="Password" className="form-control" id="gmail"></input>
                                    </div>
                                    <input type="submit" value="Sign In" style={{background: '#ffda79'}} className="btn btn-block"></input>
                                </form>
                            </div>
                        </div>

                        {/* form đăng kí */}
                        <div id="formRegister" className=" col-12">
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3 className="text-left">Sign Up</h3>
                                    <p className="text-left">Nếu chưa có tài khoản thì bay qua cái này</p>
                                </div>
                                <form onSubmit={e => handleRegister(e)}>
                                    <div className="form-group first">
                                        <label className="text-left">Your Phone number:</label>
                                        <input type="number" placeholder="Phone number" className="form-control" id="gmail"></input>
                                    </div>
                                    <input type="submit" value="Sign Up" style={{background: '#ffda79'}} className="btn btn-block"></input>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginEmail;