const x = v => {
    const z = document.getElementById('main-container');
    v.forEach(y => {
        const div = document.createElement('div');
        console.log(y);
        div.innerHTML = `
        <div class = "col">       
        <div class="card" style="width: 18rem;">
                <img src="${y.imageURL}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Car Name: ${y.name}</h5>
                    <p class="card-text">Description: ${y.description}</p>
                    <button class = "btn btn-primary">Call Price 125</button>
                </div>
            </div>
        </div>
        `;
        z.appendChild(div);
    });
};

x(data);