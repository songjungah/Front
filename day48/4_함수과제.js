function ok() {
    console.log('success');
}

function ok() {
    let date = document.querySelector('.date');
    let category = document.querySelector('.category');
    let price = document.querySelector('.price');

    let Date = date.value;
    let Category = category.value;
    let Price = price.value;

    // console.log(`확인 : ${Date}`);
    // console.log(`확인 : ${Category}`);
    // console.log(`확인 : ${Price}`);

    let print = document.querySelector('.bottom_content');

    print.innerHTML += `
    <table border = "1">
        <tr>
            <td> ${Date} </td>
            <td> ${Category} </td>
            <td> ${Price} </td>
        </tr>
    </table>
    `

}


