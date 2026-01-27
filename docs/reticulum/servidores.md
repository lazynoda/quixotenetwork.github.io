---
sidebar_position: 2
---

# 💻 Servidores Reticulum en Iberia

A continuación se listan algunos **interfaces TCP públicos** utilizados habitualmente para interconexión y propagación dentro de la red Reticulum de Iberia:

```
#Quixote
[[RNS Spain Quixote]
    type = TCPClientInterface
    enabled = yes
    target_host = reticulum.quixote.network
    target_port = 4242

#Jenny
[[RNS - Derpy Cloud]]
    type = TCPClientInterface
    enabled = yes
    target_host = rns.derps.me
    target_port = 34242

#Javi
[[RNS Spain - Javi]]
   type = TCPClientInterface
   enabled = yes
   target_host = 87.106.179.125
   target_port = 4242

#MKLabs
[[MKLabs]]
    type = TCPClientInterface
    enabled = yes
    target_host = lab.mikelcalvo.net
    target_port = 4242
    
#Reticulum Portugal
[[RNS reticulum.pt]]
    type = TCPClientInterface
    interface_enabled = true
    name = RNS reticulum.pt
    target_host = network.reticulum.pt
    target_port = 4242

#BSDHell
[[BSDHell]]
  type = TCPClientInterface
  enabled = yes
  target_host = reticulum.bsdhell.com
  target_port = 4242
```
