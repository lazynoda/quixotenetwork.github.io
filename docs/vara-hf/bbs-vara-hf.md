---
title: 📮 BBS con VARA HF
description: Cómo funcionan las BBS híbridas en HF usando VARA HF, LinBPQ/BPQ32 y clientes como VARA Terminal o QtTermTCP.
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📮 BBS en HF con VARA + BPQ (LinBPQ / BPQ32)

> ✅ Una **BBS híbrida** combina el mundo clásico **packet/BPQ** (correo, forwarding, convers, etc.) con un enlace moderno en HF usando **VARA HF** como “módem” y **LinBPQ/BPQ32** como *router/nodo/BBS*.

---

## 🧩 ¿Qué piezas intervienen?

### 🛰️ En el servidor (sysop)
- **LinBPQ (Linux)** o **BPQ32 (Windows)**  
  Nodo + BBS + forwarding + usuarios + permisos.
- **VARA HF** (módem)  
  Transforma datos TCP en audio HF (USB) y viceversa.
- PC + radio + interfaz de audio/PTT (rig control recomendado)

### 💻 En el cliente (usuario)
- **VARA Terminal** (muy usado en Windows)  
- **QtTermTCP** (cliente ligero para conectarte por TCP a BPQ)

---

## 🧠 ¿Qué es exactamente una BBS “híbrida”?

Una BBS híbrida suele tener **varias “puertas” de entrada**:

- **HF por VARA** (enlace de radio)
- **TCP/IP** (si estás en red local/VPN/Internet)
- **AX.25 / VHF/UHF** (según el nodo)

En esencia:

> **BPQ gestiona el correo y el forwarding**  
> **VARA solo es el “transporte” HF**

---

## 🧭 ¿Qué puedes hacer dentro de una BBS BPQ?

✅ Acciones típicas de usuario:
- 📩 Leer y enviar **mensajes BBS**
- 📦 Intercambiar mensajes entre varios BBS (forwarding)
- 👥 Acceder a **CHAT** (según configuración del BBS)
- 📚 Consultar **Boletines**, anuncios, mensajes públicos
- 🔗 Saltar a otros nodos/rutas (si hay red)

> ⚠️ Ojo: No todas las BBS tienen los mismos servicios habilitados.

---

## 🛠️ Flujo típico de conexión (en HF)

1. Sintonizas la frecuencia publicada (USB)  
2. Inicias conexión en VARA hacia el nodo (CALLSIGN del sysop)  
3. Una vez enlazado el transporte, el nodo BPQ te da un **prompt** (BBS / NODE)  
4. Entras con tu indicativo y operas la BBS

---

## 🧰 Clientes recomendados

<Tabs>
  <TabItem value="qtterm" label="🟩 QtTermTCP">
  
### 🟩 QtTermTCP (cliente por TCP a BPQ)
QtTermTCP es un cliente de terminal que se conecta a **BPQ por TCP**.

✅ Perfecto para:
- conectarte a tu nodo si te exponen un puerto TCP
- operar tu BBS remotamente (LAN/VPN)
- administración o sesiones de prueba

**Enlace de Descarga:** https://www.cantab.net/users/john.wiseman/Documents/QtTermTCP.html

  </TabItem>
  
  <TabItem value="vara-terminal" label="🟦 VARA Terminal">
  
### 🟦 VARA Terminal (cliente habitual)
Usado sobre todo en Windows, cómodo para HF porque integra:
- control de conexión VARA
- ventana de terminal
- reconexión y gestión básica de sesión

**Uso típico:**
- Abres **VARA HF Modem**
- Abres **VARA Terminal**
- Configuras tu radio/audio
- Conectas al callsign del nodo
**Enlace de Descarga:** https://downloads.winlink.org/VARA%20Products/

📌 Ideal si quieres algo “plug & play”.

  </TabItem>
</Tabs>

---

## 🧑‍💻 Servidor: LinBPQ y BPQ32

### 🐧 LinBPQ (Linux)
✅ Muy usado en servidores 24/7 (Raspberry Pi, miniPC, VPS con radio remota)
- estable
- automatizable
- fácil de monitorizar por scripts

### 🪟 BPQ32 (Windows)
✅ Clásico y muy extendido
- interfaz conocida en entornos packet
- buena compatibilidad con herramientas “legacy”

> 🧠 Ambos comparten el mismo concepto: **Nodo + BBS + Rutas + Puertos**.

---

## 🧷 Conceptos clave que verás en BPQ

- **NODE**: nodo/encaminador (rutas, enlaces, conexiones)
- **BBS**: buzón (mensajes, forwarding)
- **PORTS**: puertos físicos/lógicos (VARA, AX.25, TCP, etc.)
- **USERS / PERMISOS**: control de acceso por indicativo
- **FORWARDING**: intercambio automático de correo entre BBS

---

## 🧯 Buenas prácticas (para sysops y usuarios)

✅ Para operar fino en HF:
- 📶 Usa potencia moderada y audio limpio (sin ALC excesivo)
- 🎚️ Ajusta niveles para evitar splatter
- 🧭 Mantén la BBS dentro de la zona de **data** del plan de banda
- ⏱️ Respeta tiempos de transmisión (BBS automáticas 24/7)

✅ Para evitar pisadas:
- Mantente cerca del “cluster” de nodos VARA, pero con separación mínima (50–100 Hz)




