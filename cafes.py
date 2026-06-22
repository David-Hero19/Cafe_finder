
import json
from http.server import BaseHTTPRequestHandler
from urllib.parse import urlparse, parse_qs

CAFES = [
    {
        "id": "1",
        "name": "Analog Coffee",
        "city": "San Francisco",
        "address": "512 Hayes St",
        "wifi": 5,
        "outlets": 5,
        "noise_level": "quiet",
        "noise_score": 1,
        "price": 2,
        "overall_score": 4.8,
        "description": "A minimalist Hayes Valley haven beloved by engineers and writers alike. Superfast gigabit WiFi, abundant outlets under every table, and a strict no-music policy keep the focus exactly where it should be.",
        "amenities": ["Gigabit WiFi", "Standing desks", "All-day seating", "Cold brew on tap", "Single-origin espresso", "Filtered water"],
        "hours": {
            "Mon–Fri": "7:00 AM – 8:00 PM",
            "Sat": "8:00 AM – 7:00 PM",
            "Sun": "9:00 AM – 6:00 PM",
        },
    },
    {
        "id": "2",
        "name": "Good Thanks",
        "city": "San Francisco",
        "address": "1230 Ocean Ave",
        "wifi": 4,
        "outlets": 3,
        "noise_level": "moderate",
        "noise_score": 3,
        "price": 2,
        "overall_score": 4.2,
        "description": "Outer Sunset neighborhood gem with exposed brick and afternoon fog light. Popular with freelancers for its laid-back vibe and friendly baristas who don't rush you out.",
        "amenities": ["WiFi", "Pastries", "Dog-friendly", "Outdoor seating", "Plant milk options"],
        "hours": {
            "Mon–Fri": "6:30 AM – 5:00 PM",
            "Sat–Sun": "7:30 AM – 5:00 PM",
        },
    },
    {
        "id": "3",
        "name": "Prodigy Coffee",
        "city": "New York",
        "address": "33 W 19th St",
        "wifi": 5,
        "outlets": 4,
        "noise_level": "moderate",
        "noise_score": 3,
        "price": 3,
        "overall_score": 4.5,
        "description": "Flatiron's top remote-work spot. High ceilings, long communal tables, and a serious espresso program. The afternoon rush gets loud, but mornings are golden.",
        "amenities": ["Fast WiFi", "Communal tables", "Espresso bar", "Work-friendly policy", "USB outlets"],
        "hours": {
            "Mon–Fri": "7:00 AM – 9:00 PM",
            "Sat": "8:00 AM – 8:00 PM",
            "Sun": "9:00 AM – 7:00 PM",
        },
    },
    {
        "id": "4",
        "name": "Think Coffee",
        "city": "New York",
        "address": "248 Mercer St",
        "wifi": 4,
        "outlets": 4,
        "noise_level": "buzzy",
        "noise_score": 5,
        "price": 2,
        "overall_score": 3.9,
        "description": "A West Village institution favored by NYU students and startup founders. Social-impact sourced beans, good food menu, and reliably fast WiFi despite the buzz.",
        "amenities": ["WiFi", "Food menu", "Socially sourced", "USB ports", "Laptop-friendly"],
        "hours": {
            "Mon–Sun": "7:00 AM – 10:00 PM",
        },
    },
    {
        "id": "5",
        "name": "Cosmic Coffee + Beer Garden",
        "city": "Austin",
        "address": "121 Pickle Rd",
        "wifi": 4,
        "outlets": 3,
        "noise_level": "moderate",
        "noise_score": 3,
        "price": 2,
        "overall_score": 4.4,
        "description": "Austin's most beloved outdoor workspace. Sprawling garden setting, excellent cold brew, and a beer-after-5-PM policy that makes deadline crunches more bearable.",
        "amenities": ["Outdoor seating", "Beer garden", "Pet-friendly", "Food truck", "WiFi", "Live music Fri"],
        "hours": {
            "Mon–Thu": "7:00 AM – 10:00 PM",
            "Fri": "7:00 AM – 11:00 PM",
            "Sat–Sun": "8:00 AM – 11:00 PM",
        },
    },
    {
        "id": "6",
        "name": "Figure 8 Coffee Purveyors",
        "city": "Austin",
        "address": "1111 E 11th St",
        "wifi": 5,
        "outlets": 5,
        "noise_level": "quiet",
        "noise_score": 1,
        "price": 2,
        "overall_score": 4.7,
        "description": "East Austin's best-kept secret for deep-work sessions. Tucked into a converted house, no music, no meetings culture, and enough outlets that you'd swear they planned it.",
        "amenities": ["Gigabit WiFi", "Abundant outlets", "Quiet policy", "Natural light", "Specialty coffee", "Water bar"],
        "hours": {
            "Mon–Fri": "7:00 AM – 6:00 PM",
            "Sat": "8:00 AM – 5:00 PM",
            "Sun": "Closed",
        },
    },
    {
        "id": "7",
        "name": "Ozone Coffee",
        "city": "London",
        "address": "11 Leonard St, Shoreditch",
        "wifi": 5,
        "outlets": 4,
        "noise_level": "moderate",
        "noise_score": 3,
        "price": 3,
        "overall_score": 4.6,
        "description": "A Shoreditch pioneer that somehow never lost its soul. Roastery on-site, fibre broadband, and a mixed crowd of designers, developers, and the occasional VC.",
        "amenities": ["In-house roastery", "Fibre broadband", "Meeting room", "Full brunch menu", "USB-C outlets"],
        "hours": {
            "Mon–Fri": "7:30 AM – 5:30 PM",
            "Sat–Sun": "9:00 AM – 5:00 PM",
        },
    },
    {
        "id": "8",
        "name": "Attendant Coffee",
        "city": "London",
        "address": "27A Foley St, Fitzrovia",
        "wifi": 4,
        "outlets": 2,
        "noise_level": "quiet",
        "noise_score": 2,
        "price": 3,
        "overall_score": 4.1,
        "description": "Set inside a restored Victorian public toilet (really), this is London's quirkiest workspace. Small but powerful, with excellent pour-overs and a peaceful basement.",
        "amenities": ["WiFi", "Historic interior", "Specialty pour-over", "Limited seating", "Quiet"],
        "hours": {
            "Mon–Fri": "8:00 AM – 6:00 PM",
            "Sat": "9:00 AM – 5:00 PM",
            "Sun": "Closed",
        },
    },
    {
        "id": "9",
        "name": "The Barn",
        "city": "Berlin",
        "address": "Schönhauser Allee 8",
        "wifi": 5,
        "outlets": 4,
        "noise_level": "quiet",
        "noise_score": 2,
        "price": 2,
        "overall_score": 4.9,
        "description": "Berlin's gold standard for specialty coffee and laptop culture. The Prenzlauer Berg flagship has a dedicated quiet floor, multiple brew methods, and a WiFi password they change daily.",
        "amenities": ["Dedicated quiet floor", "Multiple brew methods", "High-speed WiFi", "Laptop-friendly", "Excellent filter coffee"],
        "hours": {
            "Mon–Fri": "8:00 AM – 8:00 PM",
            "Sat–Sun": "9:00 AM – 7:00 PM",
        },
    },
    {
        "id": "10",
        "name": "Bonanza Coffee",
        "city": "Berlin",
        "address": "Oderberger Str. 35",
        "wifi": 4,
        "outlets": 3,
        "noise_level": "moderate",
        "noise_score": 3,
        "price": 2,
        "overall_score": 4.3,
        "description": "Light-filled, high-ceilinged roastery cafe with a rotating cast of excellent single origins. Popular with the creative freelance crowd — get here by 10 AM for a seat.",
        "amenities": ["In-house roastery", "WiFi", "Vegan options", "Natural light", "Lots of plants"],
        "hours": {
            "Mon–Fri": "8:30 AM – 7:00 PM",
            "Sat–Sun": "9:30 AM – 7:00 PM",
        },
    },
    {
        "id": "11",
        "name": "Fuglen Tokyo",
        "city": "Tokyo",
        "address": "1-16-11 Tomigaya, Shibuya",
        "wifi": 4,
        "outlets": 3,
        "noise_level": "quiet",
        "noise_score": 2,
        "price": 3,
        "overall_score": 4.5,
        "description": "A Norwegian import that perfectly matched Tokyo's cafe culture. Exceptional filter coffee, mid-century Scandinavian furniture, and an atmosphere so calm you'll produce your best work.",
        "amenities": ["WiFi", "Specialty filter", "Design furniture", "Cocktails from 5PM", "Quiet ambiance"],
        "hours": {
            "Mon–Thu": "8:00 AM – 10:00 PM",
            "Fri": "8:00 AM – 1:00 AM",
            "Sat–Sun": "9:00 AM – 1:00 AM",
        },
    },
    {
        "id": "12",
        "name": "About Life Coffee Brewers",
        "city": "Tokyo",
        "address": "1-19-8 Dogenzaka, Shibuya",
        "wifi": 5,
        "outlets": 5,
        "noise_level": "quiet",
        "noise_score": 1,
        "price": 2,
        "overall_score": 4.8,
        "description": "A tiny, obsessively curated cafe that's become a pilgrimage site for Tokyo's remote workers. Maximum focus, minimum distraction — counter seating only, but every seat has power.",
        "amenities": ["Outlets at every seat", "Fast WiFi", "Specialty coffee", "Counter seating", "Cash only"],
        "hours": {
            "Mon–Fri": "9:00 AM – 8:00 PM",
            "Sat–Sun": "10:00 AM – 7:00 PM",
        },
    },
]


def apply_filters(cafes, params):
    city    = params.get("city",    [None])[0]
    wifi    = params.get("wifi",    [None])[0]
    noise   = params.get("noise",   [None])[0]
    outlets = params.get("outlets", [None])[0]

    result = cafes
    if city:
        result = [c for c in result if c["city"] == city]
    if wifi:
        try:
            min_wifi = int(wifi)
            result = [c for c in result if c["wifi"] >= min_wifi]
        except ValueError:
            pass
    if noise:
        result = [c for c in result if c["noise_level"] == noise]
    if outlets:
        try:
            min_outlets = int(outlets)
            result = [c for c in result if c["outlets"] >= min_outlets]
        except ValueError:
            pass
    return result


class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        params = parse_qs(parsed.query)

        cafes = apply_filters(CAFES, params)

        body = json.dumps({"cafes": cafes, "total": len(cafes)})
        body_bytes = body.encode("utf-8")

        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body_bytes)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body_bytes)

    def log_message(self, format, *args):
        pass  
