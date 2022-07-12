import React, { Fragment, useRef, useState, useEffect ,useContext} from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { clearErrors, login, register } from "../../../actions/userAction";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../../layout/Loader/Loader";


export function LoginForm(props,{match,history}) {
  const { switchToSignup } = useContext(AccountContext);

  
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  //const redirect = location.search ? location.search.split("=")[1] : "/account";

/*   useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/products");
    }
  }, [dispatch, error, alert, history, isAuthenticated]);
 */
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
    <BoxContainer>
      <FormContainer >
        <Input type="email" placeholder="Email"  required
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}/>


        <Input type="password" placeholder="Password"  required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}/>


      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Link to="/password/forgot">Forget Password ?</Link>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={loginSubmit}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
    </Fragment>
      )}
    </Fragment>
  );
}
