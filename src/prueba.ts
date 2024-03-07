document.getElementById('accionate')!.addEventListener('click', () => {
    let user = document.getElementById('floatingUser') as HTMLInputElement;
    let first = document.getElementById('floatingFirstName') as HTMLInputElement;
    let last = document.getElementById('floatingLastName') as HTMLInputElement;
    let email = document.getElementById('floatingEmail') as HTMLInputElement;
    let pass = document.getElementById('floatingPassword') as HTMLInputElement;
    let resultado = document.getElementById('resultado') as HTMLElement;

    console.log(`User: ${user.value}`);
    console.log(`First Name: ${first.value}`);
    console.log(`Last Name: ${last.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Password: ${pass.value}`);

    resultado.innerHTML = `User: ${user.value} <br> First Name: ${first.value} 
        <br> Last Name: ${last.value} <br> Email: ${email.value} <br> Password: ${pass.value}`;
});