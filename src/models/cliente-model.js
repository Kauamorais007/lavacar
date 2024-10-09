import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    endereco: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true,
        validator: {
            validate(v){
                return /^\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$/.test(v);
            }
        }
    }
});

const Cliente = model('Cliente', clienteSchema);

export default Cliente;