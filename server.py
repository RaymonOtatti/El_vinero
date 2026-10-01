#!/usr/bin/env python3
"""
ENÓLOGO - Servidor Local
Lanza el juego en el navegador predeterminado y sirve los archivos locales.
"""

import os
import sys
import webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Forzar UTF-8 en Windows Console si está disponible
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8", errors="replace")
        sys.stderr.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class EnologoHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

def run_server():
    server_address = ("127.0.0.1", PORT)
    httpd = None
    selected_port = PORT
    
    for test_port in [8080, 8000, 8081, 8888, 5000, 0]:
        try:
            httpd = HTTPServer(("127.0.0.1", test_port), EnologoHandler)
            selected_port = httpd.server_port
            break
        except OSError:
            continue

    if not httpd:
        print("[ERROR] No se pudo iniciar el servidor en ningun puerto.")
        sys.exit(1)

    url = f"http://localhost:{selected_port}"
    print("=" * 65)
    print(" ENOLOGO: Simulador de Carrera Vitivinicola")
    print("=" * 65)
    print(f" Servidor iniciado con exito en: {url}")
    print(" Abriendo en tu navegador...")
    print(" Presiona Ctrl + C para detener.")
    print("=" * 65)

    try:
        webbrowser.open(url)
    except Exception:
        pass

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor cerrado. ¡Salud!")
        httpd.server_close()

if __name__ == "__main__":
    run_server()
