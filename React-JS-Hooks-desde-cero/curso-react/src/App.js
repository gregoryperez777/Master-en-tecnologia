import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-bootstrap';

function App() {
  return (
	<div>
	<div className="App">
		<h1>React Boostrap</h1>
	</div>		
	<main>
        <Carousel>
			<Carousel.Item>
			<img
			className="d-block w-100"
			src="https://cdn5.dibujos.net/dibujos/pintados/201542/ordenador-de-sobremesa-la-casa-la-habitacion-10197538.jpg"
			alt="First slide"
			/>
			<Carousel.Caption>
			<h3>First slide label</h3>
			<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src="https://www.conmishijos.com/assets/posts/6000/6237-dibujos-ordenador.jpg"
			alt="Third slide"
			/>

			<Carousel.Caption>
			<h3>Second slide label</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src="https://eltecladosite.files.wordpress.com/2016/08/cropped-pc-dibujo.png?w=1024"
			alt="Third slide"
			/>

			<Carousel.Caption>
			<h3>Third slide label</h3>
			<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
		</Carousel>
      </main>
	  </div>

  );
}

export default App;
