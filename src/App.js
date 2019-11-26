import React from 'react';
import Template from './components/Template';


function setMenuFormat(data){
    var principalMenu = data.reduce((principalMenu, { formGroup, id,name, path, showInMenu, icon  }) => {
        if (formGroup.showInMenu){
            if (!principalMenu[formGroup.name]){
                principalMenu[formGroup.name]=[];
                principalMenu[formGroup.name].push({id: 0, name: formGroup.name, path:formGroup.path, icon:formGroup.icon});
            }
            if (showInMenu) principalMenu[formGroup.name].push({id:id, name:name, path: path, icon: icon});
        }
        return principalMenu;
    }, {});
    return principalMenu;
}

function App() {
    const menu=[{"id":1,"name":"Inicio","formGroup":{"id":1,"name":"Principal","itemOrder":1,"showInMenu":true,"isGroupOfPages":false,"icon":"home","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/","mobileScreen":"Home","showInMenu":true,"icon":"home","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":1,"system_id":1},{"id":8,"name":"Barriles","formGroup":{"id":1,"name":"Principal","itemOrder":1,"showInMenu":true,"isGroupOfPages":false,"icon":"home","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/barril","mobileScreen":"Barrel","showInMenu":true,"icon":"delete_outline","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":1,"system_id":1},{"id":9,"name":"Tarimas","formGroup":{"id":1,"name":"Principal","itemOrder":1,"showInMenu":true,"isGroupOfPages":false,"icon":"home","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/tarima","mobileScreen":"Pallet","showInMenu":true,"icon":"dns","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":1,"system_id":1},{"id":2,"name":"Mi perfil","formGroup":{"id":2,"name":"Seguridad","itemOrder":2,"showInMenu":true,"isGroupOfPages":true,"icon":"security","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/profile","mobileScreen":"Profile","showInMenu":true,"icon":"person","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":2,"system_id":1},{"id":3,"name":"Usuarios","formGroup":{"id":2,"name":"Seguridad","itemOrder":2,"showInMenu":true,"isGroupOfPages":true,"icon":"security","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/user","mobileScreen":"User","showInMenu":true,"icon":"people","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":2,"system_id":1},{"id":4,"name":"Roles","formGroup":{"id":2,"name":"Seguridad","itemOrder":2,"showInMenu":true,"isGroupOfPages":true,"icon":"security","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/rol","mobileScreen":"Rol","showInMenu":true,"icon":"supervised_user_circle","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":2,"system_id":1},{"id":5,"name":"Acciones de roles","formGroup":{"id":2,"name":"Seguridad","itemOrder":2,"showInMenu":true,"isGroupOfPages":true,"icon":"security","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/rolFormAction","mobileScreen":"RolAction","showInMenu":false,"icon":"supervised_user_circle","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":2,"system_id":1},{"id":6,"name":"Acciones por formulario","formGroup":{"id":2,"name":"Seguridad","itemOrder":2,"showInMenu":true,"isGroupOfPages":true,"icon":"security","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/formAction","mobileScreen":"FormAction","showInMenu":false,"icon":"supervised_user_circle","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":2,"system_id":1},{"id":7,"name":"Formularios","formGroup":{"id":2,"name":"Seguridad","itemOrder":2,"showInMenu":true,"isGroupOfPages":true,"icon":"security","createdAt":"2019-11-20T07:12:04.176+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"system":null,"system_id":null},"system":{"id":1,"name":"STUDENT_WEB","createdAt":null,"updatedAt":null,"createdBy":null,"updatedBy":null},"path":"/form","mobileScreen":"Form","showInMenu":true,"icon":"chrome_reader_mode","createdAt":"2019-11-20T07:12:04.236+0000","updatedAt":null,"createdBy":0,"updatedBy":0,"formGroup_id":2,"system_id":1}];
    const menuFormatted = setMenuFormat(menu);
    return (
        <div>
            <Template   menu = {menuFormatted}    ></Template>
        </div>
        
    );
}

export default App;
