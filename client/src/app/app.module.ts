import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchDestinationComponent } from './components/home/search-destination/search-destination.component';
import { InfoTripComponent } from './components/home/info-trip/info-trip.component';
import { RecommendedSliderComponent } from './components/home/recommended-slider/recommended-slider.component';
import { DestinationSliderComponent } from './components/home/destination-slider/destination-slider.component';
import { MenuTripComponent } from './components/trip/menu-trip/menu-trip.component';
import { ExperienceComponent } from './components/trip/experience/experience.component';
import { MapComponent } from './components/trip/map/map.component';
import { ItineraryComponent } from './components/trip/itinerary/itinerary.component';
import { AccommodationComponent } from './components/trip/accommodation/accommodation.component';
import { TransportComponent } from './components/trip/transport/transport.component';
import { TripComponent } from './components/trip/trip.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { PublicItinerariesComponent } from './components/public-itineraries/public-itineraries.component';
import { RecommendedComponent } from './components/recommended/recommended.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { BlogService } from './services/blog.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/blog/edit-blog/edit-blog.component';
import { DeleteBlogComponent } from './components/blog/delete-blog/delete-blog.component';
import { PublicProfileComponent } from './components/public-profile/public-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BlogComponent,
    EditBlogComponent,
    DeleteBlogComponent,
    PublicProfileComponent,
    SearchDestinationComponent,
    InfoTripComponent,
    RecommendedSliderComponent,
    DestinationSliderComponent,
    FooterComponent,
    MenuTripComponent,
    ExperienceComponent,
    TripComponent,
    MapComponent,
    ItineraryComponent,
    AccommodationComponent,
    TransportComponent,
    DestinationsComponent,
    PublicItinerariesComponent,
    RecommendedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
