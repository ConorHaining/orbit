# Illustration

To implement Illustration component into your project you'll need to add the import:

```jsx
import Illustration from "@kiwicom/orbit-components/lib/Illustration";
```

After adding import into your project you can use it simply like:

```jsx
<Illustration name="Accommodation" size="small" />
```

## Props

The table below contains all types of props available in the Illustration component.

| Name       | Type            | Default    | Description                                                                                                                                                    |
| :--------- | :-------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| alt        | `string`        |            | Optional property for passing own `alt` attribute to the DOM image element. Bby default, the `name` of illustration is used.                                   |
| dataTest   | `string`        |            | Optional prop for testing purposes.                                                                                                                            |
| id         | `string`        |            | Set `id` for `Illustration`                                                                                                                                    |
| **name**   | [`enum`](#enum) |            | Name for the displayed illustration.                                                                                                                           |
| size       | [`enum`](#enum) | `"medium"` | The size of the Illustration.                                                                                                                                  |
| spaceAfter | `enum`          |            | Additional `margin-bottom` after component. [See this docs](https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src/common/getSpacingToken) |

### enum

| name                            | size           |
| :------------------------------ | :------------- |
| `"Accommodation"`               | `"extraSmall"` |
| `"AirHelp"`                     | `"small"`      |
| `"AirportTransport"`            | `"medium"`     |
| `"AirportTransportTaxi"`        | `"large"`      |
| `"AirportShuttle"`              | `"display"`    |
| `"Ambulance"`                   |
| `"AppQRCode"`                   |
| `"BaggageDrop"`                 |
| `"Boarding"`                    |
| `"BoardingPass"`                |
| `"BusinessTravel"`              |
| `"CabinBaggage"`                |
| `"CompassCollectPoints"`        |
| `"CompassDemoted"`              |
| `"CompassEmailAdventurer"`      |
| `"CompassEmailCaptain"`         |
| `"CompassEmailPromoted"`        |
| `"CompassEmailPromotedCaptain"` |
| `"CompassEmailScout"`           |
| `"CompassPoints"`               |
| `"Chatbot"`                     |
| `"Cancelled"`                   |
| `"CompassTravelPlan"`           |
| `"CompassSaveOnBooking"`        |
| `"Damage"`                      |
| `"DesktopSearch"`               |
| `"EnjoyApp"`                    |
| `"EVisa"`                       |
| `"Error"`                       |
| `"Error404"`                    |
| `"FastTrack"`                   |
| `"FareLock"`                    |
| `"FareLockSuccess"`             |
| `"FastTrackMan"`                |
| `"Feedback"`                    |
| `"FlexibleDates"`               |
| `"FlightDisruptions"`           |
| `"Help"`                        |
| `"Improve"`                     |
| `"Insurance"`                   |
| `"InviteAFriend"`               |
| `"GroundTransport404"`          |
| `"Login"`                       |
| `"Lounge"`                      |
| `"Mailbox"`                     |
| `"Meal"`                        |
| `"MobileApp"`                   |
| `"Money"`                       |
| `"MusicalInstruments"`          |
| `"NetVerify"`                   |
| `"NoBookings"`                  |
| `"NoFavoriteFlights"`           |
| `"NoFlightChange"`              |
| `"Nomad"`                       |
| `"NomadNeutral"`                |
| `"NoNotification"`              |
| `"NoResults"`                   |
| `"Offline"`                     |
| `"OnlineCheckIn"`               |
| `"OpenSearch"`                  |
| `"Parking"`                     |
| `"Pets"`                        |
| `"PlaceholderAirport"`          |
| `"PlaceholderDestination"`      |
| `"PlaceholderHotel"`            |
| `"PlaceholderTours"`            |
| `"PlaneAndMoney"`               |
| `"PlaneDelayed"`                |
| `"PriorityBoarding"`            |
| `"Rating"`                      |
| `"ReferAFriend"`                |
| `"RentalCar"`                   |
| `"Seating"`                     |
| `"SpecialAssistance"`           |
| `"SportsEquipment"`             |
| `"Success"`                     |
| `"Time"`                        |
| `"TicketFlexi"`                 |
| `"TimelineBoarding"`            |
| `"TimelineDropBaggage"`         |
| `"TimelineLeave"`               |
| `"TimelinePick"`                |
| `"Tours"`                       |
| `"Train"`                       |
| `"TransportBus"`                |
| `"TransportTaxi"`               |
| `"Wheelchair"`                  |
| `"WomanWithPhone"`              |
