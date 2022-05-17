# Kimche Challenge

- Applicant name: Ninoska Münzenmayer
- App link:

Simple Country Search App using:

- React
- Chakra UI
- GraphQL

# Kimche Question

# ¿Qué propondrías para enfrentar el problema?

`La tabla que contiene la información correspondiente a la asistencia diaria de un niño en un colegio tiene 90 millones de filas. Todas las tablas del sistema existen en la misma BDD en MySQL. La lógica del backend que actualiza la información correspondiente al pasar la asistencia tiene un tiempo de servicio p95 de 10 segundos. El equipo está interesado en bajar este tiempo para mejorar la experiencia del usuario (y porque nos gusta pensar en Kimche como un Ferrari). ¿Qué propondrías para enfrentar el problema? Esta pregunta es abierta, no hay respuestas malas. Puedes proponer arquitectura, tecnologías, diseño, etc."`

## Paralelizar

- Implementar un servicio de colas para paralelizar inserción de datos con diferentes procesos
- A lo anterior se le puede sumar utilizar algún servicio Serverless, para ejecutar procesos por demanda sin coste de servidor, solo de proceso

## Distrubuir

- Escalar horizontalmente (aumentar-disminuir dinamicamente la cantidad de servidores de base de datos). Hay servicios como AWS Aurora que proveen un gestor similar a MySQL y proveen esta capacidad (elasticidad según demanda)
- Con lo anterior, varios servidores resuelven el servicio de base de datos

## Agrupar

- Agrupar la inserción de datos en sólo una consulta, usando una transacción por seguridad
- Implementar stored procedures (procedimientos almacenados) en MySQL, estos son más rápidos que realizar queries normales con algún driver u ORM, pues es el gestor mismo quien realiza la operación.
