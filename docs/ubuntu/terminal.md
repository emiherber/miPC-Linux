# Personalizar ubuntu

## Terminal
Personalizo la terminal con ohmybash/oh-my-bash [oh-my-bash](https://github.com/ohmybash/oh-my-bash)

Instalo el tema powerline [Powerline Theme](https://github.com/ohmybash/oh-my-bash/tree/master/themes/powerline)

Cargar los alias del archivo .bash_aliases en ohmybash
if [ -f ~/.bash_aliases ]; then
  . ~/.bash_aliases
fi

```
# iniciar/parar docker para php73 + sqlserver
function servidor_php73_sqlsrv() {
  docker $1 sqlserver2017-db
  docker $1 servidorphp73
}

# iniciar/parar docker para php + mysql
function servidor_php73_mysql() {
  docker $1 mysql-db
  docker $1 servidorphp73
}

# iniciar/parar docker para php80 + sqlserver
function servidor_php80_sqlsrv() {
  docker $1 sqlserver2017-db
  docker $1 servidorphp80
}

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# update paquetes de snap
alias snapu='snap refresh'

# update y upgrade paquetes
alias actualizar='sudo apt update && sudo apt upgrade'
```