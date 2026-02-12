---
title: 📘 Introducción
description: Introducción a VarAC como módem digital para comunicaciones punto a punto de datos (texto y archivos) especialmente para HF, usando VARA HF como módem.
sidebar_position: 1
---

# 📘 Introducción a VarAC

:::info En pocas palabras
**VarAC** aporta comunicaciones digitales **HF fiables y estructuradas**, incluso cuando la propagación no acompaña.
:::

## 🤔 ¿Qué es VarAC?

**VarAC** es un sistema de comunicaciones digitales basado en **VARA HF**, diseñado para ofrecer **mensajería e intercambio de archivos ligeros robusta, ordenada y eficiente** sobre radio, incluso en condiciones de propagación variables o degradadas.

En **Quixote Network**, VarAC se utiliza como una herramienta clave para experimentar con **comunicaciones HF resilientes**, intercambio de mensajes asincrónicos y enlaces coordinados entre nodos, complementando otros sistemas como **JS8Call** y **BBS sobre VARAHF**.

---

## 🧭 VarAC dentro de Quixote Network

El uso de VarAC en Quixote Network está orientado a:

- 📶 Comunicaciones digitales fiables en **HF** punto a punto
- 📬 Mensajería estructurada entre nodos
- 🔁 Enlaces **store-and-forward** de Mensajes (Vmail y Email)
- 🧪 Uso de una Inteligencia Artificial desde HF
- ⚙️ Escenarios donde se requiere mayor velocidad o fiabilidad que en modos de señal débil

VarAC permite construir una **capa de comunicación práctica y eficiente**, especialmente útil cuando se necesita transferir información de forma controlada y ordenada.

---

## 🎯 Enfoque de uso

En Quixote Network, VarAC se emplea desde un enfoque **experimental y colaborativo**, respetando siempre:

- 📜 El marco legal aplicable a la radioafición
- 📡 Las bandas y modos autorizados
- 🤝 Las buenas prácticas operativas

Su uso está orientado a **pruebas reales**, no ideales, donde la propagación, el ruido y la disponibilidad de los nodos forman parte del experimento.

---

# 📡 BBS en VarAC

VarAC permite funcionar como un BBS sencillo y directo.  
Solo necesitas seleccionar un directorio en tu PC y todos los archivos dentro de esa carpeta podrán ser descubiertos y descargados por otras estaciones.

Puedes compartir:

- 🖼️ Imágenes  
- 🌦️ Informes meteorológicos  
- 📜 Boletines en TXT  
- 📄 Documentación técnica  
- 📁 Cualquier archivo almacenado en el directorio compartido  

---

## ⚙️ Configuración del BBS

En **Settings → BBS** debes definir tres parámetros básicos:

- 📂 Directorio que deseas compartir  
- 🔐 Si deseas limitar el acceso a indicativos específicos  
- 📢 Si quieres anunciar tu BBS en el beacon  

---

## 🔄 Funcionamiento

Cuando una estación conecta contigo, VarAC informa automáticamente de los servicios disponibles, incluido el BBS.

> ⚠️ Ambas estaciones deben estar ejecutando VarAC versión 13.2 o superior.

Para acceder al BBS:

1. Hacer **QSY fuera de la frecuencia de llamada**.  
2. Pulsar el botón **BBS** en el panel derecho.  
3. VarAC consultará el directorio compartido y mostrará:
   - 📄 Nombre del archivo  
   - 🕒 Fecha de creación  
   - 📦 Tamaño  

Los archivos que superen el límite de descarga configurado en el cliente aparecerán en **rojo**, indicando que la transferencia puede tardar más tiempo.

---

## ⬇️ Descarga de archivos

Para descargar un archivo:

- Hacer **doble clic** sobre él.  
- La transferencia comienza inmediatamente.  

---

## 🛰️ Uso dentro de redes descentralizadas

El BBS de VarAC permite distribuir información directamente en HF sin necesidad de infraestructura externa, lo que lo convierte en una herramienta útil dentro de redes descentralizadas como Quixote Network.

---

## 🔗 Integración con otras tecnologías

VarAC no se utiliza de forma aislada, sino como parte de un **ecosistema más amplio** de comunicaciones experimentales:

- 🔊 Complementa a **JS8Call** en mensajería asincrónica
- 🕸️ Es un modo directo de comunicación punto a punto que complementa el uso del BBS
- 🌐 Se combina con redes malladas y nodos distribuidos
- 🛡️ Refuerza la **resiliencia global** de la red

Esta integración permite explorar **arquitecturas híbridas** y flujos de comunicación adaptables.

:::tip Consejo
Antes de participar en pruebas de VarAC, revisa la documentación oficial y asegúrate de que tu configuración de audio, CAT y potencia cumple con las buenas prácticas operativas.
Si tienes cualquier pregunta pregunta en el [Grupo de Telegram de Quixote Network](https://t.me/quixotenetwork/8)
:::
---

## 🚀 ¿Cómo participar?

Cualquier radioaficionado interesado puede participar en las pruebas de **VarAC** dentro de Quixote Network, configurando su estación conforme a las recomendaciones habituales de **VARA** y **VarAC**.

Para coordinar pruebas y conocer el estado de la red:
- 👀 Consulta las redes activas publicadas en esta web
- 💬 Únete a los canales de coordinación de Quixote Network
- 🧠 Comparte resultados, experiencias y mejoras con la comunidad

Para coordinación, pruebas y soporte comunitario:

👉 Únete al grupo de Telegram de Quixote Network: https://t.me/quixotenetwork

:::success Participación responsable
El uso de VarAC en Quixote Network se realiza con fines **experimentales**, respetando en todo momento la normativa vigente y las buenas prácticas de la radioafición.
:::

---
## 🔗 Enlaces relacionados con VarAC

### 🌐 Proyecto y documentación
- **Web oficial de VarAC:** https://www.varac-hamradio.com/
- **Sound Modem/TNC VARA HF:** https://rosmodem.wordpress.com/vara-hf/

### 📥 Descargas
- **VarAC (aplicación):** https://www.varac-hamradio.com/download
- **VARA HF Modem:** https://downloads.winlink.org/VARA%20Products

### 💬 Comunidad y soporte
- **Tema en Telegram:**  https://t.me/quixotenetwork/8
- **Foros y discusiones:**  https://groups.io/g/VARA-HF

### 🧪 Recursos útiles
- Guías de configuración y buenas prácticas
- Integración VARA + VarAC + CAT
- Ajustes de audio, niveles y latencias
- Pruebas en condiciones de señal débil

---

**Quixote Network** considera VarAC una herramienta fundamental para explorar **comunicaciones digitales HF fiables, colaborativas y resilientes**, dentro de una red **abierta y descentralizada**.
