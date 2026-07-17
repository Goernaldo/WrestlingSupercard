# Architektur

Die Anwendung nutzt React Router innerhalb eines geschützten `AppShell`. `GameContext` ist die zentrale, typisierte Zustandsquelle. Aktionen erzeugen unveränderliche Zustandskopien, die der Storage-Service in `localStorage` persistiert. Seiten lesen und ändern diesen Zustand über `useGame`; wiederverwendbare Darstellung liegt in `src/components`.
