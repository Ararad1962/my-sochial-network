import React from "react"
import s from "./Dialogs.module.css";

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogItems}>
            <div className={s.dialog + ' ' + s.activeDialog}>Женя</div>
            <div className={s.dialog}>Сергей</div>
            <div className={s.dialog}>Валера</div>
            <div className={s.dialog}>Артур</div>
            <div className={s.dialog}>Миша</div>
            <div className={s.dialog}>Арут</div>
         </div>
         <div className={s.usersDialogs}>
            <div className={s.message}>Hello</div>
            <div className={s.message}>How is your sochial network? </div>
            <div className={s.message}>It's create!</div>
         </div>
      </div>
   )
};

export default Dialogs;