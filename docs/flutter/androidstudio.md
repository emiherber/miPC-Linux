# Configuración general de Android Studio

Solucionar el error “Unable to locate Android SDK” de flutter.

```bash
flutter doctor

Running "flutter pub get" in flutter_tools...                      10,7s
Doctor summary (to see all details, run flutter doctor -v):
[✓] Flutter (Channel stable, 3.3.8, on Ubuntu 22.04.1 LTS 5.15.0-53-generic, locale es_AR.UTF-8)
[✗] Android toolchain - develop for Android devices
  ✗ Unable to locate Android SDK.
    Install Android Studio from: https://developer.android.com/studio/index.html
    On first launch it will assist you in installing the Android SDK components.
    (or visit https://flutter.dev/docs/get-started/install/linux#android-setup for detailed instructions).
    If the Android SDK has been installed to a custom location, please use
    `flutter config --android-sdk` to update to that location.

[✓] Chrome - develop for the web
[✓] Linux toolchain - develop for Linux desktop
[!] Android Studio (not installed)
[✓] VS Code
[✓] Connected device (2 available)
[✓] HTTP Host Availability

! Doctor found issues in 2 categories.
```

Para solucionar este problema es necesario abrir android studio, hacer clic en “more actions” y elegir la opción “SDK Manager”.
Una vez allí elegir hacer clic en la pestaña sdk tools y seleccionar las siguientes opciones:

- Android SDK Build-Tools 33 (pude ver actualizaciones asi que el número puede cambiar para cuando lo configures).
- Android SDK Command-line Tools (latest).
- Android SDK platform-Tools.
