const inst = {
    data() {
        return {
            gustaProgramar: '',
            aniosProgramando: '',
            experiencia: '',
            lenguaje: '',
            lenguajes: [],
            mostrarMensaje: false, 
            mostrarResultados: false 
        };
    },
    methods: {
        verificarRespuesta() {
            this.mostrarMensaje = (this.gustaProgramar === 'No');
            this.mostrarResultados = false; 
        },
        agregar() {
            if (this.lenguaje !== '') {
                this.lenguajes.push(this.lenguaje);
                this.lenguaje = '';
            }
        },
        eliminar(i) {
            this.lenguajes.splice(i, 1);
        }
    }
};

const app = Vue.createApp(inst).mount('#app');
