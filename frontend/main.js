import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login'

const login = new Login('.form-login')
const cadastro = new Login('.form-cadatro')

login.init()
cadastro.init()