import { nunito } from "@/app/fonts";

type Props = {
  language: "en" | "fr" | "de";
};

const CraziesText = ({ language }: Props) => {
  if (language === "de") {
    return (
      <div className={`${nunito}`}>
        <h3 className="text-xl font-bold">
          &quot;Keiner ist so verrückt, dass er nicht einen noch Verrückteren
          findet, der ihn versteht.&quot;
        </h3>
        <p className="mt-4">
          Und genau das haben wir getan! Nach einer „gewissen“ Probezeit, in der
          wir uns gegenseitig auf Herz und Nieren geprüft haben &ndash; haben
          wir festgestellt: Ja, wir sind verrückt genug füreinander. Und das
          wollen wir feiern!
        </p>
        <p className="mt-4">
          Moraira &ndash; unser Wohlfühlort, der für uns immer wieder der
          perfekte Mix aus Sonne, Freiheit und Abenteuer war &ndash; wird der
          Ort sein, an dem wir uns das Ja-Wort geben. Denn wie könnte man den
          Schritt in die gemeinsame Zukunft besser machen, als an einem Ort, an
          dem wir uns einfach zuhause fühlen?
        </p>
      </div>
    );
  }

  if (language === "fr") {
    return (
      <div className={`${nunito} text-neutral-600`}>
        <h3 className="text-xl font-bold">
          &quot;Un fou en trouve souvent un autre tout aussi fou pour le
          comprendre&quot;
        </h3>
        <p className="mt-4">
          Et c&apos;est exactement ce que nous avons fait ! Après une
          &apos;certaine&apos; période d&apos;essai, au cours de laquelle nous
          nous sommes testés mutuellement &ndash; nous avons réalisé : Oui, nous
          sommes assez fous l&apos;un pour l&apos;autre. Et nous voulons
          célébrer cela !
        </p>
        <p className="mt-4">
          Moraira &ndash; notre lieu de bien-être, qui a toujours été pour nous
          le mélange parfait de soleil, de liberté et d&apos;aventure &ndash;
          sera l&apos;endroit où nous échangerons nos vœux. Car comment
          pourrions-nous mieux franchir le pas vers l&apos;avenir commun
          qu&apos;à un endroit où nous nous sentons simplement chez nous ?
        </p>
      </div>
    );
  }

  if (language === "en") {
    return (
      <div className={`${nunito}`}>
        <h3 className="text-xl font-bold">
          &quot;No one is so crazy that he doesn&apos;t find an even crazier one
          who understands him.&quot;
        </h3>
        <p className="mt-4">
          And that is exactly what we did! After a &apos;certain&apos; probation
          period, during which we tested each other to the limit &ndash; we
          realized: Yes, we are crazy enough for each other. And we want to
          celebrate that!
        </p>
        <p className="mt-4">
          Moraira &ndash; our place of well-being, which has always been for us
          the perfect mix of sun, freedom and adventure &ndash; will be the
          place where we will exchange our vows. Because how could we better
          take the step into the common future than at a place where we simply
          feel at home?
        </p>
      </div>
    );
  }
};

export default CraziesText;
