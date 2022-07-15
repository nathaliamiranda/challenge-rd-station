import { useCallback, useEffect, useState } from "react";
import IPersonalData from "../../../interfaces/IPersonalData";
import GenericInput from "./GenericInput";
import Occupation from "./Occupations";
import PasswordInput from "./PasswordInput";

function PersonalData({
  setButtonChange,
  buttonChange,
  clearState,
  dontHaveUrl,
  validUrl,
  setClearState
}: IPersonalData) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [visibilityConfirmPassword, setVisibilityConfirmPassword] = useState(false);

  const emailVerify = useCallback(() => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
    if (!regex.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }, [email]);

  const verifyPassword = useCallback((pass: string) => {
    if (password !== confPassword) return setValidPassword("");
    if (pass.length < 6 || pass.length > 10) return;
    if (!/[A-Z]/.test(pass) || !/[a-z]/.test(pass)) return;
    if (!/[0-9]/.test(pass)) return;
    return setValidPassword(pass);
  }, [confPassword, password])

  const verifyPhone = (number: string) => {
    const regExp = RegExp("(\\d{2})(\\d{4,5})(\\d{4})");
    setPhone(number);
    setValidPhone("");
    if (number.length < 10 || number.length > 11) return;
    const formattedPhoneNumber = number.replace(regExp, "($1) $2-$3");
    console.log(formattedPhoneNumber);
    setValidPhone(formattedPhoneNumber)
  }

  const handleClick = useCallback(() => {
    if (validPassword === "") return setButtonChange(true);
    if (name === "") return setButtonChange(true);
    if (validEmail) return setButtonChange(true);
    if (validPhone === "") return setButtonChange(true);
    if (occupation === "") return setButtonChange(true);
    if (!dontHaveUrl) {
      if (validUrl === "") {
      return setButtonChange(true);
      }
    }
    setButtonChange(false);
  }, [validPassword, setButtonChange, name, validEmail, validPhone, occupation, dontHaveUrl, validUrl])

  const clear = useCallback(() => {
    if(clearState) {
      setName("");
      setEmail("");
      setValidEmail(false);
      setPhone("");
      setValidPhone("");
      setOccupation("");
      setPassword("");
      setValidPassword("");
      setConfPassword("");
      setVisibilityPassword(false);
      setVisibilityConfirmPassword(false);
    }
    setClearState(false);
  }, [clearState, setClearState]); 

  useEffect(() => {
    emailVerify();
    handleClick();
    verifyPassword(password);
    clear();
  }, [dontHaveUrl, validUrl, occupation, phone, name, validPassword, email, buttonChange, emailVerify, verifyPassword, password, handleClick, clear]);

  return (
    <>
      <GenericInput
        name={ "name" }
        value={ name }
        setField={ setName }
        label={ "Diga, qual seu nome" }
        placeholder={ "Insira seu nome" }
      />
      <GenericInput
        name={ "email" }
        value={ email }
        setField={ setEmail }
        label={ "Seu email de trabalho" }
        placeholder={ "Insira seu e-mail" }
      />
      <GenericInput
        name={ "phone" }
        value={ phone }
        setField={ verifyPhone }
        label={ "Seu telefone" }
        placeholder={ "Insira seu numero de telefone com DDD" }
      />
      <Occupation
        name={ "occupation" }
        change={ setOccupation }
        value={ occupation }
      />
      <PasswordInput
        name={ "password" }
        value={ password }
        setField={ setPassword }
        label="Crie uma senha"
        placeholder="Coloque sua senha"
        setVisibilityPassword={ setVisibilityPassword }
        visibility={ visibilityPassword }
      />
      <PasswordInput
        value={ confPassword }
        setField={ setConfPassword }
        label="Confirme sua senha"
        placeholder="Confirme sua senha"
        setVisibilityPassword={ setVisibilityConfirmPassword }
        visibility={ visibilityConfirmPassword }
      />
    </>
  );
}

export default PersonalData;
