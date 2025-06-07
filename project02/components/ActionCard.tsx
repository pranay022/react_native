import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite (websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
       <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new in TATA new Passenger Mobility 
        </Text>
       </View>
       <Image 
       source = {{
           uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMVFhUXGBcXGBcXGBgYGBoXGBcYGBUXFRcYHyggGB0lHRcXITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lIB8rLS0rLS0tLi0tLS0tLS0tLS0tLS03LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABOEAABAwEEBQYJBwoFAwUAAAABAAIRAwQSITEFQVFhcQYTIoGRsQcyQlKhwdHh8BQVYnKSk9IWIzNTVFWUorLxQ0RzgsI0g4QXJGOjs//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAvEQACAQMCBAUDAwUAAAAAAAAAAQIDERIhUQQTMaEUQWGR8CIyUjPB4RVxgbHR/9oADAMBAAIRAxEAPwDMhtns/QDmsDpeJkjYTeyjidqKtZ6dUZMqDbg4dRCztO0FxZeum8MyRAi9Eu8Z3bOQmVJdo+WueGA3YksLQW4wDIN4/a2bV2Z+hFhPyylQquZfqRhgSXNadYEmdY2qxs9tpP8AFeCdhMHsOKr2WhtJtyowubnLmmccZIIOJzz60gvsjhMXDEwMD2CQFOQ7DmmreG9AZ649A9fYqdpF4EgQMQDGOOvaN25IY0OOHUNfXHWkVmEHHLL3bUALZUNOo2oHuGRLmnHeARmtlojl1TJuV2uAAEVIknaXtaMJ+jtWCd0jHciAIEe6Vm7FJ2O6WSsx7Q+m4PYci0gjtGHV6ApfylpOJaHbxB1Z4ifeuIaI0g+g4uaXAkAdF5aQAcIIwI3GVeN5a2hsQ/nRsq0mYcHUyCfQo1ReUX1R1G0Wl4BN9kCT0QNQ3lFYtJ9ECqJwHS28ViLJy7bVBp1KbaM+U1pc2PpEG83sKvrFpuz1BAq0+p4x/wBrod2tCpTkuonGD6GgdYqFTEMpu/2ifaE1U0VTOpw14PeO4qKyjk5juHx708LRX2dchJzQ1BjrNGtGTqmvy3E445mUydGMc545yoTkQH6nAZxwTdapUObgOslVtNjhULg504YgT6MDr4JZDcS4+aW5F1XX/iPbnn4pCQ7QdF0XmXoxF5z3YiY8Y7yhRtFXz6Z3OkE8QASl1hWIxcAPoNJ9Jj1qc0GDA+nRo5Npg7GtE9Z1darrXb3uuhkNE5wYjHYJPZCepWAk4/jPVAujqAKO1mnR6RdiIMyZ34yIw14JtgkTrG0kCQ5523Q1vb7kLSW5SCfNbkOJzPX6FQ2jldZG51Q7q5z+lxPaqy0eEKhlTpz9J8hvZDj6Fkr31NG4pGnLgNV53oHDak1A48d+B6hqCw1v8INUtAptZOsuBujc1odiN5jgFm9KadtFokVKpuHyBDWxqkN8brlapmTaJHLK0tNrLqVRriA2XtM3XCcGuywwMjWqq1aQr1gBVrVKgGQe9zgOAJhNBgSwEyRtrUsMTjW4xjOyDPYlNI3n49PoSuIbDU+bOW+MLv1sDxDTieoFBlZzYIF07RIw3EQ7+Y5I3CfGBgmcgBOEmMAT6UXAF4TGJPWPUT2gKRSovc2S+43IYxOOpox/mTOWQPCPUfUgy95scY7/AHIuAH0WAxLjvF2D2iUaIuPnd/tQQMgSezL3JRec5Pako1qAs13yDedIyN4yOB1JF46yUSNIYq8dpSiZzSAEoJACERKUihA0E1OX0mEAkMepnee1OuxwTLFO0dZzUqMY0S5zg1o3uMDHiUAIpF9PFjnMO1ri09oVjR07a2jCvU/3EO/qBXWnWOwtpt0S4svOZJq4YWg4g+rhAWZ5KOp0319F2sAMqOInDoVhAa8HfA9GqUNEKpp86GSHKa1xjVJ6mj+kBLo8pbQ0kgiTmTex4w6CtPy8r0rNRpaOowQyH1XDyqp9k9w1JnTTmHRFiAiRUrbJxdKlxKU72e5Vs5bWsD/DjZcMdkpNTlra9XNN+rTA75W6s9tsZsFioWprSyox8OEXqbmvgOBzGfo1qk8J9mpUqVipse14ZTeARGLZbBMbUctLUFVbdmZO1cpbbUEOtD4Pmwz+gBUtoc55lxLjtcST2ldY0Nyio2iyvtNpo06lextbcc7AuvSGhw8qDjxWd5MhtstdW2Wx4NOn+cqTHSI8Sm0a5iI2CE8RKfW66GELYTcLpvLwUbfZW6QpFrarCKdZkgEtJhhA1kSBwP0VzMpNWHGV0JKSUopKRQkpN47SlFJKYCScI1bNXYhfO0oIoQAd87T2ow87SihBMmw5z52lLLpzUdPhAgkaEIJDNaPBvav1lk/iGIx4NLX+ssn8QxYidyE7gtCbPfsbkeDK2edZf4hiA8GVs86zffsWHncEOoJBaW/b+TcnwZ2zz7L9+xAeDW1frLJ/EMWHncEYO4IDF79v5Nv/AOnNp11rGP8AyGexAeDq0ftFi/iW+xYoOSg9K47S37G0Pg6r/tFh/iW+xAeDm0ftFh/iW+xY0OSw5K4Wlv2Nk3wd2jVXsf8AEN9ieZ4PLUMqtk6rQxYoORyi47S37G7/ACDtkzztnJ2/KGIn8gLYTev2edvPslYYFKBSyDGW/Y27vB7bSZL6BP8ArsS6fg6truiHUTuFZp9AWHBWt8GlquaQs+MBznNO+8xwA7Y7EJ3YSUkm79h+h4Prc+o+mAy9TuzL8OmCRGG4oVuQNpkh9eyAjAh1oaCNxEYLr2jaoFvtgJyZZT6Ks9y87W20mo4vObiXHiTPrVSsjOnKU37GndyDrAf9XYR/5I/Cm/yIcB/1+jhxtQ/CsmXIi5Tc1s9zVu5GCMdJaN/iZ/4Js8jKevSej/vnH/gsqXJBci4rPc1Z5HUf3po/7x34UDyNofvXR/3jvwrIl+9JNQbR2oCz3Nf+RtD966P+8d+FJPIyh+9dH/eO/Cshzo2jtQ54bR2pis9zXfkZQ/euj/vHfhQ/Iyj+9NH/AHjvwrJc6No7UfOjaO1VYNdzVHkZS/emj/vXfhSfyLpfvTR/3jvwrMc6POHalCqPOHaFSiS77mnHIyjr0pYOp7j6koaH0ZS/S6RdVPm2eg7/APR5unsWVfVG0dqXZ7JVqCWUqjxtaxzh2gKZWQ4pvzNOLXocYfJ7c6PKNSkCd8DAIKlHJ61fqHdZYPQXILPmR3RfKfr3LGnTo3nDmKPRjyTjIxnFPijQ/UUfse9VtN/Tfwb60+H8Fi4+pspeg7U5ppYOYoG86CTTacLrjh2DNSmto/qaP3TFV2h2LMvG9Tgni9JxBSJtsNBtJxbQo3gCQTTZGGOUKD860v2Sy/d+9JtL+g8fRd3FU4f8YpxpJrX/AGDqP09kXHzlT/ZbL9370DpGnH/S2X7setVAdkjvp8qPxsOY/iRbst9M/wCWs33QR/L6eEWazfdj1KqD8fegDlj3o5cfjHzH8RafLWn/AALOP+2tpyH0PZ7VSqOqUKUtdAusaPJB1zvXOQ5dO8FBJpV8fLaf5Hexc/ExxptxNKUrysy9PI6x/qKf2GfS+juCP8jbFj+YZr8lu/duWgdTOOO3VuclFh27f+S8zmT/ACZ1Yx2Rn/yNsX6hmvyW/S3bkujyVsrHB7KTWuaQWkAAggkggxgcAr57Tjjt1bnIyzHPu3p8yf5MWMdit+b23nvl954Ac68QXBoN0OIzAk4HaVAPJOxfs1PX5I3+xX1zefR5qJzN+3Z9JJ1J/k/cajHZFGeSdi/ZqX2Rv9iNnJixj/K0fsN2HduV26mZzPo+luSbm/bs2FLOf5P3Kxjsir+YLKMrNR+7bsO7cuXcpLSadprMYGNa15AAp08ADvbK7K5p2nM7Njty4nyvH/vLR/qu7118H9U3lroY13jH6dCH87VcekOqnT/CnKemqo8r+RnsVaUAvR5UNkcnMnuy1bp2vPjn7LfYk1dPWiB+cOewexVwz6k1UI9O9Pkw2XsHNnuyf+UFo11DnsA9MK40PpKo6nLnuJl2N4jyjswWSLe9Xuhf0Q4u/qKUqULaIFUnfVlxaLa4NcQ50wfKdnHFLo6TeQ2XOyHlu2cVW2p3Qd9U9xS7OOi3gFHKjboVzJX6lhpnS5FDLpBzYJJdrjJxOpR+Sj3W6s9tofUe1rLwHOPaJvAeSRqJVXp1/wCa6x3qy8F/6at/pj+oLo4KhDNJrzM69WTj1Ni3k3ZB/gN67xPWSZKCtUF9Byaf4r2PPylucVYfzjvqt73J8FRvLP1R3n2pdVxDSRiQDC+cZ3h2g+L9YJ4nFQjeutc4gy4RAI8oDGc81MakwCreK7ge5VIOSuH5Hge5U1MZcN6qIMWMght96MfGaOM0wD+NaUCiHFG0/GKAFAZrpvgj8W1DfSPaKvsXOGUHXS8xExEmd2GvALofgjqgG1TgIpEk4AACtiSVy8V+k/nma0vuR0iDjgNev625Kg7tfr9qxHKPwnWSzEtpTXqDzSBTGedTXnqBWH0hpfSGk6T3vq8xQBALf0VAtOBLqhM1OGM7AuCnws5avRepvKvFaLVnSdP8u7FZSWvrB7xPQpfnHTGRI6LTjkSFjbf4ZDJ5myDcajyT1sYMPtLCWax0nE0qVKpaKxJALZuRIhzacXjvvQBsK1Nh5BWyoOnzNAEAEAAuiREtp9HYfGldi4ajT+7v/wAMOZVn9vYWPCnb3Nwo0m4+MKdRzQ2Ii6Scd89ShWnwpW+ei+nH+iBt1Fx2qztng4bSo1KhtEljHPxZDei28ZxJC5vUqY+L/fYtqdOhP7UvYyqOrD7ma9vhM0m44VGfdU9+5GfCPpQZvb90z1BO8huSDLdQdVdUcyKhYA0NjBrHSZH0lbW3wb02NLza7jWiS57AQMDscFL8Oni0vYuMazjkm/cpmeE7SW2meNIb9nFZ7SGma9ao+q8MvPcXHAgSc4EqbyX5PVLc6o1j20yxocbwJzJEYZZKlt9B1Ko+k49JjnMdBwlpIMHZgtoQpxk1FK5lKU8btuxKsttaSTULm7LrbwPGYPYU5UtAbN0io3z2h4HXeaIKqiCMwRkcdhEg9YM9a0vIq0RVNJ3li836zc44j+lbxim7GMptK5XG3sgQTOsHLqM49gTXy5u346l0qtoWlVEVKbXcRj1HMdSzemPB+YLrM7/tvPoa729q0lQkuhnHik+pR2SmaoJYC8NxdAJgY4kahgrfRIikBvd/UVj7ZZH0nFlRjmOGpwg8d43p7Rukn0Thi3W05dWwrFpnRGZsrR4juB7in6LoaOAVZT0nSex0OglpgOwMxkJz6lZ0xg3gO5Qaq3kVunXfm+sd6ufBcPztf6jf6iqfTw/N/wC5vernwW/pK/1Gf1FdPB/qL+/7GVbozoaCJBe8cRxG90/9p7wolptZdIaYEYnX1bkmnWl5xzBjV2Ji0UwBhJMx1RK+Zj1O1yZY6KqNa13OkEOEMJ8k49ONcGDxAU2lVBwkGCRIOB3jcqcEFoBAwAAMAYCZmMySRjuVhYbG97zzbHPOu6Cc4zAGCJoFKyJhOBVNS1cFrbJyTtz8rPdG172NHYCXehP2XwY2zC8+g3CPGe49lwD0pwpy2JdemvMx4CUAug0fBg4C9UtlFoGY5skn/wCwFFaeRVlnG2Bo2MDB6XlxVKlJifFUzBNSnCASBMAmMdWK2D+S1hb/AJqs7g+mP6WT6UzU0JYRrqO41H+pHJkHio+SZmLHZL1MOm5BvVHk5ZloaMLxieiNhyzR1LQ1zSGVSGO1F7KZN3xecEnfkIE5lXp0JZDkw9bnnvO1UGnNHc28Fg6OEAYAbRlOJnXrVOHmQqt9BVgrWezl1SpQp1n4c20PeaYOsvDhiI49Wan6Lq/OFV9S11X81RAcW07oAbjgwEw0ANMmC4hJ0BZabw6WgEEZ44HZPAq+p6LpgZjHOBnxTVC+oPiLaHQdEaNo2emG0KQYw3ThEmbuLnEy48VL51ozIGWZaPN3rnB0cw5knqlH8gpjMHsXJ/TW9XLt/J0/1JLRRNJy30mG2GsKTmuqOa1oa0tc7pOY12AJPil3YuV6Q0zpCvQbZ6l91FrrzWlgBBxGcTrPatiLPSGo+j2JMUpyOR1jdu3rpo8Lyo2uc1bi+ZK9ix8G9upWexNZVc1jy95LTAPkgEjgFReEXSdW1uFGiyaDCHXpAvvu54nISRxk7FLLqXmnt9yHO0/NPb7klwUVPO43xsnDCxD8HFQ2V1Y12lt5jA0+NN29I6M7RnsWd05oqrVtFWqxoDX1HvAcRMOcSJidq14rU/N9KBfTOr0rRcNFSctzN8VJxUdjDHQdV0eIDJl152UNAERqg5beCmM0BVouZVbXoOc1wcA3ngcDON6mBByz1rXsZSTrbPTOtaqijN1mVzeUFq1U6HWansSzyltgyp2bsqH1hWDbE2cCMfj2+hLOiZWmMtzK8djOaS0xXtLblehZXN23Kt5u9rg+QVm/mYhuXTnDo4FuGbrwyx8niV02loAnV2AnuUv8lRdDjgCczhxzSdK/UpVlHRHJRoSs7MtjecBwzUqzaOtVLxajY2XiR9kjBdOdoagzes9pXRNK/fZVrM+iHAtnbDwY7lE6BcOIuzOWk1ajLrxTBkG8CYwOyCVovBa2KtpBwIawEbDefIPYqR9JjajGmq+HOAyZlInxWStJ4PK5fabWSSQAxrZ8xr6gZjrwjFHDQxqx+eR1TnGUHZt/4t+7NygjQXtHKedecPx6UT35R8Z+1ANQqZAL5yx1WJ2h6zedHOUnVhGDGuuY7XYGRuwWxs3K+owXadlo02jzqlcnqFKowFY6w1rjSLuJkk7RkOoY9qdZXABLjGGG86lrGKIkrmpo6dq3i51apicnVXkDc1pdAHBTPn9hzqEng4rn9W3mcMN+Z9yjm1v853UY7knK2hHKTOhv0ox2Th3d6aNQuyx4LC07e8Dxj1496s7FpwtwJIBiYJg8WpqSBwt0NKQQYOB34IF7Rm6fqg+tQWVbwn4PWjWl0Z2ZMbaGgYSTJz4mMkupaGOABpsMbQT6CoLAe/vSwCjIWJNoWwsENDGjcxg9MJ8aYqDyj6FWBpRxvRkLEsHaVqHy3faKYfbXHMk8UwKZOUngEZszvNd2FGQ8RRtKL5TjidWyU2bO7zT2FJ5h0+K7sO9LIrEcNfeOz3IfKD8AJl1IjMEcQm4RkGJK+UfEexAWjh6VEhAk7UZBiTBaPifaEbrZG2dnvUG8d3oVFpHSJdLWGG6yMzw3JOdhqFy9tOnQ0wXngzE5cR3qvr8oDPiSNpcD3T3rPAbE/TsNR2TVnzJM05cUXtl5SXcbpadziD1QPWFotF8tHu6POF30amfU7X2lYGtYKrBLmOA2xh2qPKaqyQnSizrFfTAeMMDrHxmqS2Wzes/ovSRPQcT9E6zuJ2qTXqTnktnUurmSpWY1VeTNTW2C37Qj0q45Dco6NlfWNW9DwwNutveKXTOO8ZKFYKIr0qraZJqNAc0YAODT+cGOwEOG2FXVNAWmf0RM7CD24rNTcZKSOhR0Onf+oNi86p925Bcs+ZrT+pqfZKC28bU9CeWhfzS7b/KfahU0JVi+0XmN8YiBdEgSRM/2K1RsJ88p2x2FzSTeBBaWkRmDv1HLEQvPdRnTjcxdWyFk5+MYJwmAB3qHa65c6SdQA4AAA+gLV8pbKGUwQIPS27N6yNKnLuC0TukZNWYKVGcTkrGyaOL2F7bt0GCSYxie5SLE6zupOY5115wvEdGNUEZQQDiotmtLqQeweK8QQcQHCRPYXBPoIbs4D5hhMCTAxA1nDVim61jwvMMjZrCsNFWs0hUc0YuhoPitAEk9LichsTNnFQh1W6bki84CGAkxA24xlOaOogtC20tcGnxSY4E5FaoUQPGMbhie+B2rHV23Xy3CfX3QVrtGOL6bSc4g8Rh71SfkTJeY81rNTXZnMjbsA9aUB9Afze1QbRpVtJ7mOMZEcCB65TDuUjBrlFycS36Xmj7I9iBv7T2wqN/KduoH46ky7lMdQ70XDEv3tcc56ymzTKoXcoHnZ2FNu01VORHZ7kXHiX7mFNFuPZ61QnSlb4/skHSVbZ8diLhiaEOIyJHDBK593nE8cR2HBZ75fWiYHa2ezNAaTq7Ai4Yl+ap1hv2QP6YKSag8wdRdPpJVINKVNbW9qU3Sx1s7He5Fx4krStqa1t267pSMHAGNeN07lnXw49EEDUCZPWYHcpWkbRfMwQIhM2NuJOxS9WUtETrDQF5rJaHOIF52ACLTDXUn3A69AxMa7zhlqyUnS+jabQHU6jKkAXrrgZ2nA4cNkFVdeqXeMZMATrgZTvQwLjSNRlAjmnvvGMJkbzw4qvtLBVF4NuvicoDxtG/A4jYmmC8688yMziJO7EiApdv0oal0XAA3xSCMBsAaIjLDcmFiqpOjaCMRxCftVoc87Bs9u1FUaBUBiQcYBj0we5XOh9DPtMmlZ6zwM3Co26OJNKOpSMjcmLS+jXa4NJEjDbqEcZI4OK7Fo+xCMQs1ya0E2iS97Bfnoy6+QI4AA55DrxhXVs5SUbM9rKoIvC9ILYiYJiZw/tK1pvfoWlZFx8hbsQVL+Xlh1OeRtu4HeJxQW+UBXKAVDu6gpFnstV4JaHEDM5NHFxgDrVs3m2/o6d76VQYf7aYw7byKvULv0ji6MhqG5rRgAvONLmb5QaNPMuJdeLQeiwX+suwAjcTmsNZgL5nK8Afq/wBl1Z9Q6h2rKcp9E020zUY0NdeBMYAjGQBMa5w3q4szkUWlBZmk808knMNaYPG9EdRIVaAMMwOE49qtrPZaXNGq52WF3AEnUBAnVt1HYq2654c4CA0STJ6hJ1qyRh4yjLVhn1KwGlalx1IlsEQRDmndgMMImIUWnZnPY5+LruJ19EDE9WHVwVr87l1A0SAS4t6WfRBmQTiCYj0oAqrcw4cJ7lYWe31GthroBxyGsDaFAtT9W3uTTartpSbCxMr/AJw3n9I7ShTsrTkyeAJSrFUIMrTaP0kRrOxZTqOPRGsKafmZuz2S+brKd53mtbeO/AAlWVHk7anZWar103N7wFY8mbLTs9bnGzMEZ7c1sW6aWFTiJJ/Sjanw8WvqZhvyWtp/y9TrLR3lLHI23H/Lu+3S9b1uTps6kY00Vl4qrsu5r4WnuzEM5EW4/wCCBxq0vU9OjkDbT5NMcajfUtn88lD53KnxNbZD8NS3ZizyBtn/AMX3nuUevyKtTc+a+2fwrcVdLFVlt0gSFUa9V9bCfD0luYp/JytjjTw+l7lXV7G5pgx1Fae0WkwVnrU/FdcJzfU5pwguhX1KWpCztiRMb9yeeDnqTAwMrZGLRY6Q0QaDbz3Mg5Agy6PMz9Sqw8Zx6/X7VYUrM6u8C/nhiSThkBPuTelbI1tUUmASCGkzMkxmRrknBMRGBmSDkJiDiCeEQMJmOtWVk0jTDHA0ad4tcAQ0HEiBBzafQmLYw0a94ZYOG9hEeohPW1jKr2NoshxwcRg0nUQNUDElAjbeD/k3Z69n56vRD3Cq4MMu8UNaCC0GHC9ez3rfMs1OAGtAAwAAAgbABksToDSdSy020h0qbRkcMSZcQRlJJOta2waXp1spB805+/qRjcpOxLLZzx+sL3f7VR8oeSNC2uY54NMsBEsxvCZAMnIEu+1ntv8AilhXGIzJv8G2jycH1WjZfGHawn0oLYCoUFpihGVNMnLDvSmWI7Fb0qG0KU2mN65AbKF1gw1rE6asz6jiccCQBsErrIoJq06HpVcXNg7RgfelcEcEtlB1MnouunOQY6jqS6ekqQovpBuLhF6csQScsZiF248k2nJ8cWz3FH+SW+meLfcnmGhw/RulnUZ5u7eM4npZiMBt4yntE6Gq1nXW03jCfEIB6yAAu3U+TTx+r6iR6lJGgqn0e0+zgnmFjmei/B+zE1r7iRlIAG+YzVpZPB1ZWjpGo7i4ei6BC6CzRD/o9qebol+1vafYpuBiLNyCsTf8JzuNR/dKs7PyTsjcqDesk95WpZos7R6U63R/0gkxpmeo8n7MMqFP7MqXT0RRGVGn9kK4Fi+l6EptlA1+hQ0VmVPzbS/VM+yPYliw0xlTZ9kexWnycbe5DmxtKMR5laLG3zGfZHsRmyN8xv2R7FOewbSo9QQjEMiK+yUzmxn2R7ExU0bROdNv2QppcmXHiniLIorbydoO8iOB9sqhtfI+icietrT7FuDTH91HfTCtIltnP6vIzUHMjZdjulVNt5EVD4pYOBMdwXTHsCbe0JiucffyQtjcmsI3OHrRDk9bbwdzJLhrv0z3u3rrlSkIyngMVB+V0gcSQdhaVV2FjnZ5N2ysW86AABALi0wNgDcCr7RvJfmhhmc3EyT2ZDgtiwNIlpkbkLkJZMdijpaNDcyexSqdlbnr2+tWj2TqSKbIMwCBn70rsok2Cs5wh2Ma9vtUxoSGnclXyMgt4sgdulGkX9xQWtwHmUgnmUQgwJ6m1cQAZRHx608yz70Gj4kpwD4xQAYpJbWwkSUsO3n0pWAWBxTl3imA8JQqJWAeuoiU1fSSQmA/KBI2qP1pXOQgBcjb8fEorw2pPObEg1PiUrDHD1pB4FJ5xJNVOwCiOKbc0bSlc6kudKAGnUmnamzRbvThJQNRAxk0xvTTqQ2Ht96kh5RFMRBNBp1H0qFbbE4+IeqSOwq1qGPj0oiRsQMzRoVmnyusk+5Jr0DUi9jC0sjYotps2MgJMpFCNHgZQDuJUqz0T58HY6SO05KTc3JFzckMcFmfra08CfWlsLBm0jqTNyEd7biqQrE+jWpnIjsjvTxdGsKqcycCmnS3DFaIlou7/BBUgqHb3oKgsX7E6HpkOG70o7yyJH7yUKkKPzkbEOc3oAnTIkJq+mmVeKWSD/dABh29HziYdghe+PYkA+KqMPUU1NSAft7/AGIAlGqkmqoxdvRB6BkkVERqKMaqJz0ASDUQvqOHIzUSHYkXyi53eo8ow5MB8vSZGzvTRIQQAoor/DsSXYfHwUi8NoQA4XpLfjegG7Ciu9upFwsGAlwm7w2YdyImEirCnAa0xVo7E6HSklAEN1M6wepIIU4CUl1MHUEDK+EVOrOBU42fYUirZv7j4xVARzZ27Sgkmkd3d3oJ5BYsCc0tpwRoJGQhxRtKCCAHGHBAlEggBcpBKCCAGiUGZhBBIA5wRAoIIGKKQCgggaF00HOKCCADCSEaCAHaQx7e9M1HnESY4o0EANgpUoIIANqdpHFEgkUN1vGPV60mmc+HrCCCQxWz41pBKJBMCTUz6vUkFBBACXJLD8dSCCYgygggqA//2Q=='
       }}
       style={styles.cardImage}
       />
       <View style={styles.bodyContainer}>
            <Text numberOfLines={3}> 
                The word Avinya, derived from the Sanskrit language, means 'innovation' and 'Beauty'.
                Tata Passenger Electric Mobility is a subsidiary which produces electric cars under the brand name Tata Motors. List of Tata electric vehicles: Tata Curvv.EV. Tata Nexon EV.
            </Text>
       </View>
       <View style={styles.fotterContainer}>
                <TouchableOpacity
                onPress={()=> openWebsite('https://ev.tatamotors.com/concept-cars/avinya.html')}
                >
                    <Text style={styles.socialLink}>
                        Read More
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=> openWebsite('https://www.tata.com/newsroom/business/tata-motors-avinya')}
                >
                    <Text style={styles.socialLink}>
                        Follow me
                    </Text>
                </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:12
    },
    card:{
        width:350,
        height:320,
        borderRadius:8,
        paddingHorizontal:8,
        marginVertical:12,
        marginHorizontal:19,
    },
    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#555',
        shadowOpacity:0.5,
    },
    headingContainer:{
        height:30,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600',

    },
    cardImage:{
        height:150,
        borderRadius:5,
    },
    bodyContainer:{
        padding:10,

    },
    fotterContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        padding:10,
        borderRadius:6,
    }
})