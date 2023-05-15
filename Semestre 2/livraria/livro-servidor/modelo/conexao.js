const banco = require("mongoose");

const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

banco.connect(
	"mongodb+srv://luhmeiy:glgypiQOk07fSNLS@cluster0.5h2gsen.mongodb.net/livraria?retryWrites=true&w=majority",
	options
);

module.exports = banco;
