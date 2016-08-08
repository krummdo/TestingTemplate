
<!-- CODIGO -->


// HELPERS

Handlebars.registerHelper('concha', function(context, params) {
    // console.log(context, params)
  text = Handlebars.escapeExpression(params.hash.text);
  url  = Handlebars.escapeExpression(params.hash.url);

  var result = '<a href="' + url + '">' + text + '(' + context.title + ')</a>';
  // alert(result)
  return new Handlebars.SafeString(result);
});

/* *************** *************** *************** *************** *************** */

//TEMPLATE 1

// debugger
var source   = $("#template-uno").html();
var template = Handlebars.compile(source);

var context = {
    title: "mi titulo", 
    body: "mi cuerpo delgado"
};

$('#uno').html(template(context))

    
/* *************** *************** *************** *************** *************** */

//TEMPLATE 2

var source   = $("#template-dos").html();
var template = Handlebars.compile(source);

var context = {
    title: "this is my title", 
    body: "ramaos body",
    showTitle: false
};
// var html    = template(context);

$('#dos').html(template(context))

/* *************** *************** *************** *************** *************** */

//TEMPLATE 3

var source   = $("#template-tre").html();
var template = Handlebars.compile(source);

var context = {
    lista: [{nombre:'ramon', apellido:'caca'}, {nombre:'jose', apellido:'perez'}, {nombre:'pancho', apellido:'soerrete'}],
    time: new Date().toString()
};
// var html    = template(context);

$('#tre').html(template(context))
