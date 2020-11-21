## Welcome to apiPot project
![logo.apipot.com](https://logo.apipot.com/4/default.png)

+ [www.apipot.com](https://www.apipot.com)
+ [logo.apipot.com](https://logo.apipot.com)


## install on VPS

    git clone https://github.com/apipot/www.git
    cd www
    
    sh install.sh
    
    sh status.sh
    
    sh start.sh

## Data processing
Data from folder: "data/in" are used to generate the content in folder: "repo/"     
    
    sh data.sh

## Tests    

https://apipot.com
https://foo.apipot.com
    
    sh test.sh
    
    
## What it's apiPot?

Platforma prezentacji mediów z róznych platform

## How it work's?

### stworzenie projektu, konfiguracja
podaj 2 parametry:
+ url repozytorium
+ nazwa projektu (domyslna pochodzi z formatu: [repozytorium].[organisation].apipot.com) 

### zarządzanie projektami
+ dodawanie
+ edycja grupowa wszystkich mediów jednocześnie na jednej stronie

### routing
jakie technologie pozwolą szybko tworzyć routing dla subdomen?

### deployment
Projekt jest wystawiany jako statyczny projekt
deployment w wersji darmowej nie obejmuje własnego środowiska.
Dopiero w wersji płatnej jest własny numer IP serwera.

## jLoads

jLoads to rozwiązanie po stronie frontendu, do ładowania plików poprzez przeglądarkę,
to proste rozwiązanie pozwalające na szybkie stworzenie strony, bez narzędzi w sposób modułowy.
Co daje takie rozwiązanie?
Tworzenie szybko czegoś w oparciu o gotowce, np: potrzebujesz stworzyć stronę z logowaniem, ankietą, ofertą, itd wchodzisz na darmową i otwarta bibliotekę mediów i po prostu dodajesz do swojego, ewnetualnie zmieniasz, to co jest potrzebne, dodajesz konfigiurację tylko swoją.
W późniejszym etapie, to będzie gotowa do pobrania aplikacja na systemy mobilne jak android.


O co chodzi w tym rozwiązaniu?
O streamowanie danych i aplikacji, coś co należy do przyszłosci w IoT i tutaj widzę siebie.
#IoT
#Streamowanie Aplikacji
#Budowanie Interfejsów



Obecnie jestem w trakcie budowanie takiego ekosystemu rozwiązań dla wielu społeczności:
+ programistów
+ providerów usług
+ artystów (grafików, muzyków, itd)

jedno rozwiązanie to za mało, żeby móc coś sensownego zaproponować.

Już wcześniej na forum się zapowiadałem, dlatego chętnie pokażę efekty tych rozwiązań i same rozwiązania, w skład których wchodzą:
+ oprogramowanie do budowania modularnych web-aplikacji, konfiguruje się tylko URL-e z dostępem do modułów w html, javascript, css, itd
+ oprogramowanie do deploymentu, ładuje Twoją aplikację bezpośrednio na VPS, podpinasz domenę przez rekordy: CNAME, A
+ oprogramowanie do zarządzania darmowymi bibliotekami mediów,
+ .. być może w przyszłości jescze marketplace z płatnymi autorskimi skryptami, modułami, mediami, itp, które będą po prostu opłacane w modelu subskrypcji miesięcznej/rocznej.


