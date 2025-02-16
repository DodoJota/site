from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sobre-nos')
def sobre_nos():
    return render_template('sobre_nos.html')

@app.route('/servicos')
def servicos():
    return render_template('provas_de_vinho.html')

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

@app.route('/alojamento')
def alojamento():
    return render_template('alojamento.html')

if __name__ == '__main__':
    app.run(debug=True)