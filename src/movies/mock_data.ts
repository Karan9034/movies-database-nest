const movies = [
    {
        id: 1,
        title: 'True Story of Jesse James, The',
        releaseDate: '31-10-2011',
        description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        genre: 'Action|Crime|Western',
    },
    {
        id: 2,
        title: 'The Prisoner',
        releaseDate: '04-01-2019',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        genre: 'Drama',
    },
    {
        id: 3,
        title: 'Apollo 13',
        releaseDate: '31-03-2014',
        description:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        genre: 'Adventure|Drama|IMAX',
    },
    {
        id: 4,
        title: 'Before I Self Destruct',
        releaseDate: '19-07-2013',
        description:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        genre: 'Drama',
    },
    {
        id: 5,
        title: 'Orange County',
        releaseDate: '18-04-2023',
        description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        genre: 'Comedy',
    },
    {
        id: 6,
        title: 'Will Success Spoil Rock Hunter?',
        releaseDate: '11-08-2003',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        genre: 'Comedy|Romance',
    },
    {
        id: 7,
        title: 'Fright Night Part II',
        releaseDate: '03-06-2012',
        description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
        genre: 'Horror',
    },
    {
        id: 8,
        title: 'Postal',
        releaseDate: '05-08-2016',
        description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        genre: 'Action|Comedy|Thriller',
    },
    {
        id: 9,
        title: 'Rain Over Santiago (Il pleut sur Santiago)',
        releaseDate: '19-06-2016',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        genre: 'Documentary|Drama|War',
    },
    {
        id: 10,
        title: 'Moving Alan',
        releaseDate: '18-12-2010',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        genre: '(no genres listed)',
    },
    {
        id: 11,
        title: 'Animal Kingdom, The',
        releaseDate: '27-07-2017',
        description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        genre: 'Drama|Romance',
    },
    {
        id: 12,
        title: 'Train Ride to Hollywood',
        releaseDate: '28-01-2022',
        description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        genre: 'Comedy|Fantasy|Musical',
    },
    {
        id: 13,
        title: 'Save the Tiger',
        releaseDate: '09-10-2007',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        genre: 'Drama',
    },
    {
        id: 14,
        title: 'Hitch-Hiker, The',
        releaseDate: '26-04-2017',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        genre: 'Drama|Film-Noir',
    },
    {
        id: 15,
        title: 'Robin Hood',
        releaseDate: '16-04-2000',
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        genre: 'Action|Adventure|Drama|Romance|War',
    },
    {
        id: 16,
        title: 'I Can Get It for You Wholesale',
        releaseDate: '21-06-2009',
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        genre: 'Drama|Romance',
    },
    {
        id: 17,
        title: 'Merchants of Doubt',
        releaseDate: '08-08-2022',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        genre: 'Documentary',
    },
    {
        id: 18,
        title: 'Sitting Bull',
        releaseDate: '23-10-2014',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
        genre: 'Western',
    },
    {
        id: 19,
        title: 'Puppet Master 5: The Final Chapter',
        releaseDate: '04-04-2012',
        description:
            'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        genre: 'Horror|Sci-Fi|Thriller',
    },
    {
        id: 20,
        title: 'Identity Thief',
        releaseDate: '11-02-2004',
        description:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        genre: 'Comedy|Crime',
    },
    {
        id: 21,
        title: "My Baby's Daddy",
        releaseDate: '24-05-2005',
        description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        genre: 'Comedy',
    },
    {
        id: 22,
        title: 'Career Girls',
        releaseDate: '20-07-2008',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        genre: 'Drama',
    },
    {
        id: 23,
        title: 'Terminator Salvation',
        releaseDate: '08-03-2004',
        description:
            'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        genre: 'Action|Adventure|Sci-Fi|Thriller',
    },
    {
        id: 24,
        title: 'Carmina or Blow Up (Carmina o revienta)',
        releaseDate: '14-11-2016',
        description:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        genre: 'Comedy|Drama',
    },
    {
        id: 25,
        title: 'Dating Games People Play',
        releaseDate: '01-03-2007',
        description:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        genre: 'Comedy',
    },
    {
        id: 26,
        title: 'This Happy Breed',
        releaseDate: '26-07-2001',
        description:
            'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
        genre: 'Comedy|Drama',
    },
    {
        id: 27,
        title: 'Paperhouse',
        releaseDate: '26-06-2021',
        description:
            'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        genre: 'Fantasy|Horror|Thriller',
    },
    {
        id: 28,
        title: 'Sam Peckinpah: Man of Iron',
        releaseDate: '25-02-2018',
        description:
            'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
        genre: 'Documentary',
    },
    {
        id: 29,
        title: 'Carts of Darkness',
        releaseDate: '06-06-2019',
        description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        genre: 'Documentary',
    },
    {
        id: 30,
        title: 'Nightmare on Elm Street 3: Dream Warriors, A',
        releaseDate: '05-11-2006',
        description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        genre: 'Horror|Thriller',
    },
    {
        id: 31,
        title: 'Frankenstein',
        releaseDate: '25-02-2009',
        description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        genre: 'Drama|Horror|Sci-Fi',
    },
    {
        id: 32,
        title: 'Stalag Luft',
        releaseDate: '05-12-2017',
        description:
            'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        genre: 'Comedy|Drama|War',
    },
    {
        id: 33,
        title: 'Bloodstone: Subspecies II',
        releaseDate: '19-12-2003',
        description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        genre: 'Horror',
    },
    {
        id: 34,
        title: "Prospero's Books",
        releaseDate: '12-09-2019',
        description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        genre: 'Drama|Fantasy',
    },
    {
        id: 35,
        title: 'Ricky Rapper and the Bicycle Thief (Risto Räppääjä ja polkupyörävaras)',
        releaseDate: '21-08-2020',
        description:
            'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        genre: 'Children|Comedy|Musical',
    },
    {
        id: 36,
        title: 'Carefree',
        releaseDate: '20-09-2004',
        description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        genre: 'Comedy|Musical|Romance',
    },
    {
        id: 37,
        title: 'Mud',
        releaseDate: '06-04-2011',
        description:
            'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        genre: 'Adventure|Crime|Drama',
    },
    {
        id: 38,
        title: 'Daniel',
        releaseDate: '30-10-2017',
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        genre: 'Drama',
    },
    {
        id: 39,
        title: 'Suburbans, The',
        releaseDate: '06-04-2008',
        description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
        genre: 'Drama',
    },
    {
        id: 40,
        title: 'OH in Ohio, The',
        releaseDate: '14-07-2014',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        genre: 'Comedy',
    },
    {
        id: 41,
        title: 'Anotherworld',
        releaseDate: '26-01-2008',
        description:
            'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        genre: 'Drama|Romance',
    },
    {
        id: 42,
        title: 'Foxfire',
        releaseDate: '17-11-2023',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        genre: 'Drama',
    },
    {
        id: 43,
        title: 'Corpse Bride',
        releaseDate: '30-01-2012',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        genre: 'Animation|Comedy|Fantasy|Musical|Romance',
    },
    {
        id: 44,
        title: 'Mélo',
        releaseDate: '20-12-2015',
        description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        genre: 'Drama|Romance',
    },
    {
        id: 45,
        title: 'Unreal Dream: The Michael Morton Story, An',
        releaseDate: '17-07-2023',
        description:
            'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        genre: 'Documentary',
    },
    {
        id: 46,
        title: 'Homevideo',
        releaseDate: '18-02-2016',
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        genre: 'Drama',
    },
    {
        id: 47,
        title: 'Marc Maron: Thinky Pain',
        releaseDate: '17-05-2015',
        description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        genre: 'Comedy',
    },
    {
        id: 48,
        title: 'Problem Child 2',
        releaseDate: '23-09-2020',
        description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        genre: 'Comedy',
    },
    {
        id: 49,
        title: 'Léolo',
        releaseDate: '14-03-2018',
        description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        genre: 'Comedy|Drama',
    },
    {
        id: 50,
        title: 'Abbott and Costello Meet the Invisible Man',
        releaseDate: '17-10-2015',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
        genre: 'Comedy|Sci-Fi',
    },
    {
        id: 51,
        title: 'Strange Invaders',
        releaseDate: '17-09-2014',
        description:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        genre: 'Drama|Romance|Sci-Fi',
    },
    {
        id: 52,
        title: "Bill Burr: I'm Sorry You Feel That Way",
        releaseDate: '24-10-2005',
        description:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        genre: 'Comedy',
    },
    {
        id: 53,
        title: 'Speaking of Sex',
        releaseDate: '30-04-2012',
        description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        genre: 'Comedy|Romance',
    },
    {
        id: 54,
        title: 'In Hell',
        releaseDate: '27-01-2004',
        description:
            'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        genre: 'Action|Drama|Thriller',
    },
    {
        id: 55,
        title: 'Sing a Song of Sex (Treatise on Japanese Bawdy Songs, A) (Nihon shunka-kô)',
        releaseDate: '16-02-2021',
        description:
            'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        genre: 'Thriller',
    },
    {
        id: 56,
        title: 'Separation City',
        releaseDate: '22-12-2007',
        description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        genre: 'Comedy|Drama|Romance',
    },
    {
        id: 57,
        title: 'Lola Versus',
        releaseDate: '15-11-2016',
        description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        genre: 'Comedy|Romance',
    },
    {
        id: 58,
        title: 'Legend of Bagger Vance, The',
        releaseDate: '21-01-2006',
        description:
            'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
        genre: 'Drama|Romance',
    },
    {
        id: 59,
        title: 'Insomnia',
        releaseDate: '15-01-2002',
        description:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
        genre: 'Action|Crime|Drama|Mystery|Thriller',
    },
    {
        id: 60,
        title: 'The Forgotten Space',
        releaseDate: '07-11-2013',
        description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        genre: 'Documentary',
    },
    {
        id: 61,
        title: 'Salvatore Giuliano',
        releaseDate: '21-11-2006',
        description:
            'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        genre: 'Crime|Drama|War',
    },
    {
        id: 62,
        title: 'Leaving Normal',
        releaseDate: '25-01-2022',
        description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        genre: 'Comedy|Drama',
    },
    {
        id: 63,
        title: 'Star Trek: Insurrection',
        releaseDate: '27-01-2016',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        genre: 'Action|Drama|Romance|Sci-Fi',
    },
    {
        id: 64,
        title: 'Ixcanul Volcano',
        releaseDate: '07-05-2022',
        description:
            'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        genre: '(no genres listed)',
    },
    {
        id: 65,
        title: 'Marilena de la P7',
        releaseDate: '05-04-2007',
        description:
            'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        genre: 'Drama|Fantasy',
    },
    {
        id: 66,
        title: 'Riot on Sunset Strip',
        releaseDate: '10-10-2021',
        description:
            'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        genre: 'Drama',
    },
    {
        id: 67,
        title: 'Roman Polanski: Wanted and Desired',
        releaseDate: '09-03-2000',
        description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        genre: 'Documentary',
    },
    {
        id: 68,
        title: 'Godzilla vs. Biollante (Gojira vs. Biorante) ',
        releaseDate: '19-08-2023',
        description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
        genre: 'Action|Sci-Fi',
    },
    {
        id: 69,
        title: 'Go',
        releaseDate: '21-03-2011',
        description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        genre: 'Drama',
    },
    {
        id: 70,
        title: 'Cremator, The (Spalovac mrtvol)',
        releaseDate: '13-02-2016',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        genre: 'Comedy|Drama|Horror|Thriller',
    },
    {
        id: 71,
        title: 'As I Was Moving Ahead Occasionally I Saw Brief Glimpses of Beauty',
        releaseDate: '30-08-2000',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        genre: 'Documentary',
    },
    {
        id: 72,
        title: 'Waxworks (Das Wachsfigurenkabinett)',
        releaseDate: '15-05-2008',
        description:
            'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        genre: 'Comedy|Drama|Romance|Thriller',
    },
    {
        id: 73,
        title: 'Bridge, The (Die Brücke)',
        releaseDate: '29-06-2009',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        genre: 'War',
    },
    {
        id: 74,
        title: 'Patriots, The (Patriotes, Les)',
        releaseDate: '26-07-2007',
        description:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
        genre: 'Thriller',
    },
    {
        id: 75,
        title: 'Walk on Water',
        releaseDate: '16-10-2018',
        description:
            'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        genre: 'Drama|Thriller',
    },
    {
        id: 76,
        title: 'Teenage Mutant Ninja Turtles: Turtles Forever',
        releaseDate: '08-05-2006',
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
        genre: 'Action|Adventure|Animation|Comedy|Thriller',
    },
    {
        id: 77,
        title: "Tyler Perry's Madea's Big Happy Family",
        releaseDate: '28-07-2006',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        genre: 'Comedy|Drama',
    },
    {
        id: 78,
        title: 'Broken Bridges',
        releaseDate: '02-06-2016',
        description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        genre: 'Drama',
    },
    {
        id: 79,
        title: 'Spirit, The',
        releaseDate: '01-02-2016',
        description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        genre: 'Action|Comedy|Fantasy|Thriller',
    },
    {
        id: 80,
        title: 'Jackie Brown',
        releaseDate: '09-01-2003',
        description:
            'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
        genre: 'Crime|Drama|Thriller',
    },
    {
        id: 81,
        title: 'Ghidorah, the Three-Headed Monster (San daikaijû: Chikyû saidai no kessen)',
        releaseDate: '21-06-2011',
        description:
            'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        genre: 'Action|Adventure|Fantasy|Sci-Fi',
    },
    {
        id: 82,
        title: "Dragon Ball: Sleeping Princess in Devil's Castle (Doragon bôru: Majinjô no nemuri hime)",
        releaseDate: '04-06-2011',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        genre: 'Action|Adventure|Animation|Children',
    },
    {
        id: 83,
        title: 'St. George Shoots the Dragon (Sveti Georgije ubiva azdahu)',
        releaseDate: '16-12-2014',
        description:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        genre: 'Drama|War',
    },
    {
        id: 84,
        title: 'Dog Days (Hundstage)',
        releaseDate: '14-10-2022',
        description:
            'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        genre: 'Drama',
    },
    {
        id: 85,
        title: 'What Happened, Miss Simone?',
        releaseDate: '26-09-2016',
        description:
            'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        genre: 'Documentary',
    },
    {
        id: 86,
        title: "Honor Among Thieves (Adieu l'ami) (Farewell, Friend)",
        releaseDate: '15-06-2010',
        description:
            'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        genre: 'Action|Adventure|Crime|Drama|Mystery|Thriller',
    },
    {
        id: 87,
        title: 'Young Lieutenant, The (Le petit lieutenant)',
        releaseDate: '31-05-2009',
        description:
            'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        genre: 'Crime|Drama',
    },
    {
        id: 88,
        title: 'Notorious',
        releaseDate: '10-03-2008',
        description:
            'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        genre: 'Film-Noir|Romance|Thriller',
    },
    {
        id: 89,
        title: 'Arguing the World',
        releaseDate: '28-03-2018',
        description:
            'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        genre: 'Documentary',
    },
    {
        id: 90,
        title: 'Vertical Ray of the Sun, The (Mua he chieu thang dung)',
        releaseDate: '20-12-2019',
        description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
        genre: 'Drama',
    },
    {
        id: 91,
        title: 'Wyatt Earp',
        releaseDate: '10-09-2022',
        description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        genre: 'Western',
    },
    {
        id: 92,
        title: 'Kal Ho Naa Ho',
        releaseDate: '01-12-2020',
        description:
            'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
        genre: 'Comedy|Drama|Romance',
    },
    {
        id: 93,
        title: 'Cyborg',
        releaseDate: '06-02-2003',
        description:
            'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        genre: 'Action|Sci-Fi',
    },
    {
        id: 94,
        title: 'Beats Being Dead (Dreileben - Etwas Besseres als den Tod)',
        releaseDate: '26-02-2005',
        description:
            'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        genre: 'Drama',
    },
    {
        id: 95,
        title: 'Modigliani',
        releaseDate: '02-01-2023',
        description:
            'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        genre: 'Drama',
    },
    {
        id: 96,
        title: 'Mirror, The (Ayneh)',
        releaseDate: '21-09-2018',
        description:
            'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        genre: 'Drama',
    },
    {
        id: 97,
        title: 'Tarzan the Ape Man',
        releaseDate: '21-09-2021',
        description:
            'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        genre: 'Action|Adventure',
    },
    {
        id: 98,
        title: 'Buffet froid',
        releaseDate: '03-05-2001',
        description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        genre: 'Comedy|Crime',
    },
    {
        id: 99,
        title: 'Tales from the Script',
        releaseDate: '11-11-2017',
        description:
            'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
        genre: 'Documentary',
    },
    {
        id: 100,
        title: 'Die! Die! My Darling! (Fanatic)',
        releaseDate: '14-04-2012',
        description:
            'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        genre: 'Horror|Thriller',
    },
];
export default movies;
