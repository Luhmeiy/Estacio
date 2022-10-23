import tkinter
import tkinter.font as tkFont
from tkinter import ttk
from PIL import ImageTk
import Operacional


class entry_personalizado():
    def __init__(self, master: tkinter.Tk, xPixel: int, yPixel: int, widthPixel: int, heightPixel: int,
                 nome_Entry: str, tam_Letra: int, password: bool):
        # Configure cores na classe
        self.corLetra = 'black'
        self.corLinha1 = '#909090'
        self.corLinha2 = '#21599D'

        self.corFundo = master['background']
        self.master = master
        self.xPixel = xPixel
        self.yPixel = yPixel
        self.widthPixel = widthPixel
        self.heightPixel = heightPixel
        self.password = password
        self.nome_Entry = nome_Entry
        self.tam_Letra = tam_Letra
        self.fonte_Class = tkFont.Font(family="Lucida Grande", size=tam_Letra)
        self.criar_Linha()
        self.criar_entry()
        self.criar_label()

    def focus_entry(self, event):
        self.entry.focus()

    def escreve_entry(self, event):
        self.label_Class.place(y=self.yPixel - self.heightPixel)
        self.label_Class.configure(foreground=self.corLinha2, text=self.nome_Entry)
        self.canvas_entry.itemconfig(self.linhaCanvas, fill=self.corLinha2)

    def verificaTexto(self, event):
        if str(self.entry.get()) == '':
            self.label_Class.place(y=self.yPixel)
            self.label_Class.configure(foreground=self.corLinha1)
            self.canvas_entry.itemconfig(self.linhaCanvas, fill=self.corLinha1)
        else:
            self.label_Class.place(y=self.yPixel - self.heightPixel)
            self.label_Class.configure(foreground=self.corLinha2)
            self.canvas_entry.itemconfig(self.linhaCanvas, fill=self.corLinha2)

    def criar_Linha(self):
        self.canvas_entry = tkinter.Canvas(self.master, background=self.corFundo, bd=0, highlightthickness=0,
                                           width=self.widthPixel, height=self.heightPixel)
        self.canvas_entry.place(x=self.xPixel, y=self.yPixel + 15)
        self.linhaCanvas = self.canvas_entry.create_line(0, 0, self.widthPixel, 0, fill=self.corLinha1)

    def criar_entry(self):
        self.entry = tkinter.Entry(self.master, background=self.corFundo, foreground=self.corLetra,
                                   width=self.widthPixel, font=self.fonte_Class, bd=0)
        if self.password == True:
            self.entry.configure(show='●')
        self.entry.place(anchor='w', x=self.xPixel, y=self.yPixel, width=self.widthPixel, height=self.heightPixel)
        self.entry.bind('<FocusIn>', self.escreve_entry)
        self.entry.bind('<FocusOut>', self.verificaTexto)

    def criar_label(self):
        self.label_Class = tkinter.Label(self.master, background=self.corFundo, foreground=self.corLinha1,
                                         font=self.fonte_Class, bd=0, text=self.nome_Entry, cursor=self.entry['cursor'])
        self.label_Class.place(anchor='w', x=self.xPixel, y=self.yPixel, height=self.heightPixel)
        self.label_Class.bind('<Button-1>', self.focus_entry)


class botao_de_imagens():
    def __init__(self, master: tkinter.Tk, xPixel: int, yPixel: int,
                 imgBase: str, imgMouse: str):
        self.master = master
        self.xPixel = xPixel
        self.yPixel = yPixel
        self.corFundo = master['background']
        self.imgBase = imgBase
        self.imgMouse = imgMouse
        self.criar_imgBase()

    def mouseEntrou(self, event):
        self.lbBase['image'] = self.imgm
        self.lbBase.update()

    def mouseSaiu(self, event):
        self.lbBase['image'] = self.imgb
        self.lbBase.update()

    def criar_imgBase(self):
        self.imgb = ImageTk.PhotoImage(file=self.imgBase)
        self.imgm = ImageTk.PhotoImage(file=self.imgMouse)
        self.lbBase = tkinter.Label(self.master, image=self.imgb, bd=0, cursor='hand2')
        self.lbBase.place(x=self.xPixel, y=self.yPixel)
        self.lbBase.bind('<Enter>', self.mouseEntrou)
        self.lbBase.bind('<Leave>', self.mouseSaiu)
        self.lbBase.bind('<ButtonRelease-1>', self.mouseEntrou)


class app_login(Operacional.funcoes):
    def __init__(self):
        self.Criar_tela()
        self.Criar_entrys()
        self.Criar_logo()
        self.Criar_botao()
        self.criar_Titulo()
        self.tela.mainloop()

    def Criar_tela(self):
        self.tela = tkinter.Tk()
        self.tela.geometry('800x600')
        self.tela.resizable(False, False)
        self.tela.title('Login Estoque - Team 29 Estacio')
        self.tela.configure(background='white')

    def Criar_entrys(self):
        self.usuario = entry_personalizado(master=self.tela, xPixel=400, yPixel=220, widthPixel=300, heightPixel=25,
                                           nome_Entry='Matricula', password=False, tam_Letra=12)
        self.senha = entry_personalizado(master=self.tela, xPixel=400, yPixel=285, widthPixel=300, heightPixel=25,
                                         nome_Entry='Senha', password=True, tam_Letra=12)

    def Criar_logo(self):
        self.img = ImageTk.PhotoImage(file='imagens\\estacio.gif')
        self.logo = tkinter.Label(self.tela, bd=0, background=self.tela['background'], image=self.img)
        self.logo.place(x=10, y=150)

    def Criar_botao(self):
        self.bt = botao_de_imagens(master=self.tela, xPixel=435, yPixel=350,
                                   imgBase='imagens\\btBase_login.gif', imgMouse='imagens\\btMouse_login.gif')
        self.bt.lbBase.bind('<Button-1>', self.verificar_login)

    def criar_Titulo(self):
        self.titulo = tkinter.Label(self.tela, bd=0, background=self.tela['background'],
                                    text='Login Central de Ferramentaria', fg='black',
                                    font=tkFont.Font(family='Lucida Grande', size=20))
        self.titulo.place(x=360, y=70)


class app_Adm(Operacional.funcoes):
    def __init__(self):
        print('fazer')


class app_Cli(Operacional.funcoes):
    def __init__(self):
        print('fazer')


app_login()
