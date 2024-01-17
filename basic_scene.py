from manimlib import *

class Basic(Scene):
    def construct(self):
        kw = dict(
            font_size=80,
            fill_color=BLUE
        )
        tex = Tex(r'R_{\mu \nu} - \frac{1}{2}g_{\mu \nu}R + g_{\mu \nu}\Lambda = \frac{8\pi G}{c^4}T_{\mu \nu}', **kw)
        self.add(tex)

if __name__ == "__main__":
    scene = Basic()
    scene.run()
