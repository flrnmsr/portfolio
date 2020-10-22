import React from 'react'
import { Box } from 'rebass/styled-components'

import Layout from '../components/Layout'
import Section from '@components/Section'

const Imprint = props => {
  return (
    <Layout>
      <Box mt={[20]}>
        <Section title="">
          <Box pb={[128]} width={[1, 1, 1, 12 / 12]}>
            <h2>
              Impressum gemäß § 5 TMG <br /> <br />
              Adresse: Florian Moser, Donaustraße 16, 12043 Berlin, Deutschland <br />
              E-Mail: moser.florian1@gmail.com <br />
              Website: florianmoser.com <br />
              Telefon: +49 173 691 4551 <br /> <br />
  Externe Links: Diese Website enthält Verknüpfungen zu Websites Dritter ("externe Links"). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht. <br />  <br />
Urheber- und Leistungsschutzrechte: Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig. <br /> <br />
  Besondere Nutzungsbedingungen: Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen. Quelle: Impressum-Generator
              <br />
            </h2>
          </Box>
        </Section>

        <Section pt={[20]} title="">
          <Box pb={[128]} width={[1, 1, 1, 12 / 12]}>
            <h2>
            Datenschutz <br /> <br />
            Content-Delivery-Network von Netlify: Wir setzen ein so genanntes "Content Delivery Network" (CDN), angeboten von Netlify, Inc., ein. Ein CDN ist ein Dienst, mit dessen Hilfe Inhalte unseres Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Skripte mit Hilfe regional verteilter und über das Internet verbundener Server, schneller ausgeliefert werden. Die Verarbeitung der Daten der Nutzer erfolgt alleine zu den vorgenannten Zwecken und der Aufrechterhaltung der Sicherheit und Funktionsfähigkeit des CDN. Die Nutzung erfolgt auf Grundlage unserer berechtigten Interessen, d.h. Interesse an einer sicheren und effizienten Bereitstellung, Analyse sowie Optimierung unseres Onlineangebotes gem. Art. 6 Abs. 1 lit. f. DSGVO. Weitere Informationen erhalten Sie in der Datenschutzerklärung von Netlify: https://www.netlify.com/gdpr/.
            </h2>
          </Box>
        </Section>
      </Box>
    </Layout>
  )
}

export default Imprint
