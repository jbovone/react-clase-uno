
import { BlogPost } from './tarea/Tarea1.js';
import { MatchNombre } from './tarea/Tarea2.js';
import { PasswordInput } from './tarea/Tarea2.js';
import { ValidationInput } from './tarea/Tarea2.js'
import { UncontrolledCheckbox } from './tarea/Tarea3.js'
import { CheckboxList } from './tarea/Tarea3.js'
import { ControlledCheckbox } from './tarea/Tarea4.js';
import { CheckboxListWithState } from './tarea/Tarea4.js'

class Article {
  constructor(titulo, parrafos) {
    this.titulo = titulo;
    this.parrafos = parrafos;
  }
}

class Autor {
  constructor(nombre, titulo, imagen) {
    this.nombre = nombre
    this.titulo = titulo
    this.imagen = imagen
    this.articles = []
  }
  addArticle(article) {
    this.articles.push(article)
  }
}

const autor = new Autor(
  "Julián Bovone",
  "Programador Full Stack Trainee",
  "https://ca.slack-edge.com/TNG5KKB2P-UREJZAZ2R-63323c056cea-512"
)


const article = new Article(
  'Reflexiones sobre Ardillas',
  'Hoy vi una ardilla La ardilla era negra, era más grande que otras ardillas \n, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.\n Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.'
);

const items = {
  uno: false,
  dos: true,
  tres: false,
}

function validation(input) {
  const MIN_LENGTH = 8
  if (input.length > MIN_LENGTH && !input.match(" ")) {
    return true
  } else {
    return false
  }
}


ReactDOM.render(<CheckboxListWithState items={items} />, document.querySelector('#react-app'));

//tarea 1 <BlogPost {...article}/>

// tarea 2 
// <MatchNombre name="julian"/>
// <PasswordInput length="7" />
// <ValidationInput isPassword={true} validation={validation}/>

// tarea 3 
// <UncontrolledCheckbox name="React Rulz" initialValue={true} />
// <CheckboxList items={items} />

// tarea 4 
// <ControlledCheckbox name="React Rulz" value={true} /> 
// <CheckboxListWithState items={items} />
