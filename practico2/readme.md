# Juego de Piedra, Papel y Tijeras - Versión 1.02

¡Bienvenido al Juego de Piedra, Papel y Tijeras!

Este es un juego simple donde compites contra la computadora para ver quién gana más rondas. El objetivo es llegar a 3 puntos antes que tu oponente. Cada ronda, tú y la computadora seleccionarán una de las tres opciones: Piedra, Papel o Tijeras. El resultado de la ronda se determina según las reglas clásicas: Piedra vence a Tijeras, Tijeras vence a Papel y Papel vence a Piedra.

## Desarrollo de la Lógica de la App

La lógica de la aplicación se desarrolló en JavaScript y se basa en la siguiente estructura:

- **HTML:** La estructura de la página web se define en HTML. Aquí se definen los elementos principales, como el nombre del jugador, las opciones de juego y los marcadores.

- **CSS:** Se utiliza CSS para estilizar la página web y darle una apariencia atractiva.

- **JavaScript:** La lógica principal del juego se implementa en JavaScript. Se gestionan eventos de clic, se calcula el resultado de cada ronda y se actualizan los marcadores.

## Desarrollo:

La aplicación se desarrolló utilizando como base un código anterior apuntado al juego Piedra, Papel y Tijeras. Para esto se utilizó la herramienta ChatGpt con el objetivo de mejorar
y optimizar el código. 

## Casos de Prueba de Error

Aquí se presentan algunos casos de prueba de error que se han tenido en cuenta durante el desarrollo para garantizar un funcionamiento correcto y evitar comportamientos inesperados:

1. **Nombre de jugador vacío:** Si el usuario intenta comenzar el juego sin ingresar su nombre, se muestra una alerta indicando que es necesario ingresar un nombre.

2. **Selección de opción no válida:** Si el usuario intenta seleccionar una opción no válida o hace clic en una opción incorrecta, el juego no realiza ningún cálculo.

3. **Intentar jugar después de que se haya alcanzado un ganador:** Una vez que un jugador (ya sea el usuario o la computadora) alcanza 3 puntos y gana el juego, no se permiten más jugadas hasta que se reinicie el juego.

4. **Exceso de tiempo entre jugadas:** Si el usuario intenta realizar otra jugada antes de que hayan transcurrido los 3 segundos de tiempo de espera, la aplicación no permite una nueva selección hasta que se complete el tiempo de espera.

---

