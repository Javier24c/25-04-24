$("Document").ready(function(){
    console.log("hola");

    let numero1 = 0;
    let numero2 = 0;
    let resultado =0;

    $("#btnSumar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        

        if(numero1===""){
            $("#error1").text("Debe agregar el primer numero")
            $("#error1").css("color","red")
            return;
        }
       

        numero2 = $("#numero2").val();

        if(numero2===""){
            $("#error2").text("Debe agregar el segundo numero")
            $("#error2").css("color","red")
            return;
        }
       
        resultado=parseInt(numero1) + parseInt(numero2);
        $("#resultado").text(resultado);


    })

    $("#btnRestar").click(function(){
        $("#error1").text();
        $("#error2").text();
        $("#resultado").text();

        numero1 = $("#numero1").val();

        if(numero1===""){
            $("#error1").text("Debe agregar el primer numero")
            $("#error1").css("color","red")
            return;
        }
       

        numero2 = $("#numero2").val();

        if(numero2===""){
            $("#error2").text("Debe agregar el segundo numero")
            $("#error2").css("color","red")
            return;
        }
       
        resultado=parseInt(numero1) - parseInt(numero2);
        $("#resultado").text(resultado);

        
    })

    $("#btnMultiplicar").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        

        if(numero1===""){
            $("#error1").text("Debe agregar el primer numero")
            $("#error1").css("color","red")
            return;
        }
       

        numero2 = $("#numero2").val();

        if(numero2===""){
            $("#error2").text("Debe agregar el segundo numero")
            $("#error2").css("color","red")
            return;
        }
       
        resultado=parseInt(numero1) * parseInt(numero2);
        $("#resultado").text(resultado);

        

    })

    $("#btnDividir").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();
        

        if(numero1===""){
            $("#error1").text("Debe agregar el primer numero")
            $("#error1").css("color","red")
            return;
        }
       

        numero2 = $("#numero2").val();

        if(numero2===""){
            $("#error2").text("Debe agregar el segundo numero")
            $("#error2").css("color","red")
            return;
        }
       
        resultado=parseInt(numero1) / parseInt(numero2);
        $("#resultado").text(resultado);

        

    })

        $("#btnLimpiar").click(function(){
            $("#numero1").val("");
            $("#numero2").val("");
            $("#resultado").text("");
        })
    
    //     function limpiar(){
    //     $("#numero1").val("");
    //     $("#numero2").val("");
    // }



    $.get("https://digimon-api.vercel.app/api/digimon", function(data,status){
        if (status === "success"){
            $.each(data,function(index, digimon){
                let digimonCard = `
                <div class='col-md-4 md-3'>
                    <div class='card'>
                    <img src="${digimon.img}" class= 'card-img-top' alt= "${digimon.name}">
                    <div class = 'card-body'>
                    <h5 class = 'card-tittle'>${digimon.name}</h5>
                    <p class='card-text'> Tipo: ${digimon.level}</p>
                    </div>
                </div></div>`;
            
            $("#digimon-list").append(digimonCard);
            });
        } else {
            $("#digimon-list").html("<p>Error al cargar los datos de la API</p>")
        }
    });
});



