# Configuración de git

## Crear las claves de GPG

[Integrating GPG with Git on Ubuntu Linux](https://www.codymorterud.com/development/2018/08/21/WSL-Git-GPG-integration.html)
[Generar una llave GPG nueva](https://docs.github.com/es/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)

## Configuraciones globales de git

- Ver configuración

```bash
nano .gitconfig o git config --list
```

- Registrar usuario

```bash
git config --global user.name "nombre"
```

- Registrar email

```bash
git config --global user.email "ejemplo@email.com"
```

- Branch por defecto

```bash
git config --global init.defaultBranch main
```

- Registrar GPG (signingKey)

```bash
git config --global user.signingKey idGPG
```

- Usar calves GPG con Git

```bash
git config --global commit.gpgsign true
```

- Registrar un directorio como seguro

```bash
git config --global --add safe.directory 'directorio'
```
